class ApplicationController < ActionController::Base
	protect_from_forgery
	prepend_before_filter :store_location
  before_filter :authenticate_user!
  helper_method :current_user

  rescue_from Errors::NotAuthorized,    with: :require_login
  rescue_from Errors::RecordNotFound,   with: :record_not_found
  rescue_from Errors::ApplicationError, with: :application_error

  # authorize_resource  unless: :public_area

  include ApplicationHelper

	rescue_from CanCan::AccessDenied do |e|
    # flash[:alert] = e
    redirect_to root_path
  end

  protected
  def page
    params[:page] || 1 
  end

  def per_page
    params[:per] || 25
  end

  def public_area
  	return true if params[:controller] =~ /home|devise/i
  	
		if cannot?(:create, model_klass)
			raise CanCan::AccessDenied 
		else 
			return true
		end if params[:action] =~ /new|create/i
  	false
  end

  def model_klass
  	params[:controller].sub("Controller", "").
  	underscore.split('/').last.singularize.
  	camelize.constantize
  end

	def authenticate_user!
	  unless current_user.present?
      raise Errors::NotAuthorized
    else
      ApiTower::Base.access_token = current_token
    end
	end

	def current_user
	  session["current_user"]
	end

  def current_token
    current_user.persistence_token if current_user
  end

	def require_login
		flash[:alert] = "Session time out or not authorized access"
    if request.xhr?
      error_json = {message: flash[:alert], code: 401}
      render json: error_json, status: :unauthorized
    else
      redirect_to login_path
    end
	end

	def record_not_found
		flash[:alert] = "Sorry, we can not find the page or data is invalid"
		redirect_back_or_default(root_path)
	end

	def store_location
	  session[:return_to] = request.referer
	end

	def redirect_back_or_default(default)
	  redirect_to(session[:return_to] || default)
	  session[:return_to] = nil
	end

	def application_error
    unless request.xhr?
  		flash[:alert] = "Sorry, API has been error, please contact our support."
  		redirect_back_or_default(root_path)
    else
      render text: 'api error'
    end
	end



end

class UsersController < ResourcesController
  defaults resource_class: User
  before_filter :prepare_roles, only: [:index, :create, :edit, :new, :update]
  before_filter :prepare_service_points, only: [:create, :edit, :new, :update]

  def import
    if request.post?
      result = User.import(User.import_params(params))
      if result.errors.present?
        flash[:alert] = result.errors
      else
        flash[:notice] = result.message
      end
      redirect_to import_users_path
    else
      @user = User.show('import')
      @permit_attributes = @user.permit_attributes.marshal_dump
      @require_attributes = @user.require_attributes.marshal_dump
    end
  end
  
  def update
    @user = User.update(params[:id], User.stub_params(params))
    if @user.errors.blank?
      flash[:notice] = 'User is updated!'
      current_user = @user if @user.role_name == "inspector"
      redirect_to edit_user_path(params[:id])
    else
      superiors(@user.role_id)
      sites(@user.service_point_ids)
      render action: :edit
    end
  end

  def edit
    super
    superiors(@user.role_id)
    sites(@user.service_point_ids)
  end

  def superiors(role_id=nil)
    role_id ||= params[:role_id]
    @users = User.show('superiors', {role_id: role_id, per_page: -1}).first if role_id.present?
  end

  def sites(site_ids=nil)
    site_ids ||= params[:site_ids]
    @sites = User.show('sites', {site_ids: site_ids, per_page: -1}).first if site_ids.present?
  end

  private
    def prepare_roles
      @roles = Role.all
    end

    def user
      @user ||= User.show(params[:id])
    end

  protected
    def input_parameter
      User.stub_params(params)
    end

    def prepare_service_points
      @service_points = ServicePoint.show('select').first
      @clients = Client.all(template: 'small')
    end
end


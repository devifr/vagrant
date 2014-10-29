class SessionController < ApplicationController
  skip_before_filter :authenticate_user!
  include ApiTower

  def create
    result = ApiTower.auth(params[:username], params[:password])
    if result.data
      session["current_user"] = result.data
      redirect_to dashboard_path
    else
      flash[:alert] = result.messages.to_sentence # Array  
      redirect_to login_path
    end
  end	  
end
class DeviseController < ApplicationController
	skip_before_filter :authenticate_user!
	layout 'devise'

	def login
		if request.post?
			reset_session
			result = User.login(username: params[:username], password: params[:password])
			
			if result.is_a?(Array)
				flash[:alert] = result.to_sentence
			else
				session[:current_user] = result
				flash[:notice] = "You are logged in as #{result.username}"
				redirect_to dashboard_path
			end
		end
	end

	def forgot
		if request.post?
			@user = User.forgot(email: params[:email])
			flash[:notice] = "Successfuly Recovery Password"
			redirect_to login_path
		end
	end

	def change
		if request.post?
			@user = User.change(user: params[:user])
			if @user.message.present?
				flash[:notice] = @user.message
				redirect_to login_path
			else
				flash[:alert] = @user.to_sentence
				render action: :change
			end
		end
	end

	def logout
		User.logout
		reset_session
		redirect_to login_path
	end

end
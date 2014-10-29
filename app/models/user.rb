class User < ApiTower::Base
  resource_name :users

  DATETYPE =  [
                ["Created Date", "created_at"],
                ["Updated Date", "updated_at"]
              ]

  class << self

    def login(options={})
      responser(post("/login", {body: options}))
    end

    def logout
      responser(get("/logout"))
    end

    def forgot(options={})
      responser(post("/forgot-password",{body: options}))
    end

    def change(options={})
      responser(post("/change-password",{body: options}))
    end


    def stub_params(params)
      profile_attributes = params[:user][:profile_attributes]
      return {user: params[:user]} unless profile_attributes
      profile_picture = profile_attributes[:picture]
      return {user: params[:user]} unless profile_picture
      return {user: params[:user]} unless profile_picture.is_a?(ActionDispatch::Http::UploadedFile)
      params[:user][:profile_attributes][:picture] = File.new(rename_upload_file(profile_picture))
      return {user: params[:user]}
    end

    def import_params(params)
      return {user: {}} unless params[:user]
      return {user: params[:user]} unless params[:user][:file].is_a?(ActionDispatch::Http::UploadedFile)
      params[:user][:file] = File.new(rename_upload_file(params[:user][:file]))
      return {user: params[:user]}
    end

    def rename_upload_file(upload_file)
      split_name = upload_file.tempfile.path.split("/")
      split_name.pop
      split_name.push(upload_file.original_filename)
      new_path = split_name.join("/")
      File.rename(upload_file.tempfile.path, new_path)
      new_path
    end

  end

end

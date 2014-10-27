class Permission < ApiTower::Base
  resource_name :permissions

  class << self

    def import_params(params)
      return {permission: {}} unless params[:permission]
      return {permission: params[:permission]} unless params[:permission][:file].is_a?(ActionDispatch::Http::UploadedFile)
      params[:permission][:file] = File.new(rename_upload_file(params[:permission][:file]))
      return {permission: params[:permission]}
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
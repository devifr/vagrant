class Role < ApiTower::Base
	resource_name :roles

  class << self
    
    def import_params(params)
      return {role: {}} unless params[:role]
      return {role: params[:role]} unless params[:role][:file].is_a?(ActionDispatch::Http::UploadedFile)
      params[:role][:file] = File.new(rename_upload_file(params[:role][:file]))
      return {role: params[:role]}
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
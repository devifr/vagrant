class Project < ApiTower::Base
  resource_name :projects

  class << self
    
    def import_params(params)
      return {project: {}} unless params[:project]
      return {project: params[:project]} unless params[:project][:file].is_a?(ActionDispatch::Http::UploadedFile)
      params[:project][:file] = File.new(rename_upload_file(params[:project][:file]))
      return {project: params[:project]}
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
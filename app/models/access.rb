class Access < ApiTower::Base
  resource_name :accesses

  class << self
    
    def import_params(params)
      return {access: {}} unless params[:access]
      return {access: params[:access]} unless params[:access][:file].is_a?(ActionDispatch::Http::UploadedFile)
      params[:access][:file] = File.new(rename_upload_file(params[:access][:file]))
      return {access: params[:access]}
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
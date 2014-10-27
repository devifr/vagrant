class Site < ApiTower::Base
  resource_name :sites

  DATETYPE =  [
                ["Created Date", "created_at"],
                ["Updated Date", "updated_at"]
              ]

  class << self
    def import_params(params)
      return {site: {}} unless params[:site]
      return {site: params[:site]} unless params[:site][:file].is_a?(ActionDispatch::Http::UploadedFile)
      params[:site][:file] = File.new(rename_upload_file(params[:site][:file]))
      return {site: params[:site]}
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

class SiteUser
end
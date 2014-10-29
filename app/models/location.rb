class Location < ApiTower::Base
  resource_name :locations

  DATETYPE =  [
                ["Created Date", "created_at"],
                ["Updated Date", "updated_at"]
              ]

  class << self

    def select
      responser(get("/locations/select"))
    end

    def import_params(params)
      return {location: {}} unless params[:location]
      return {location: params[:location]} unless params[:location][:file].is_a?(ActionDispatch::Http::UploadedFile)
      params[:location][:file] = File.new(rename_upload_file(params[:location][:file]))
      return {location: params[:location]}
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
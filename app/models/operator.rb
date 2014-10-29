class Operator < ApiTower::Base
  resource_name :operators

  class << self
    
    def stub_params(params)
      profile_attributes = params[:operator][:profile_attributes]
      return {operator: params[:operator]} unless profile_attributes
      profile_picture = profile_attributes[:picture]
      return {operator: params[:operator]} unless profile_picture
      return {operator: params[:operator]} unless profile_picture.is_a?(ActionDispatch::Http::UploadedFile)
      params[:operator][:profile_attributes][:picture] = File.new(rename_upload_file(profile_picture))
      return {operator: params[:operator]}
    end

    def import_params(params)
      return {operator: {}} unless params[:operator]
      return {operator: params[:operator]} unless params[:operator][:file].is_a?(ActionDispatch::Http::UploadedFile)
      params[:operator][:file] = File.new(rename_upload_file(params[:operator][:file]))
      return {operator: params[:operator]}
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
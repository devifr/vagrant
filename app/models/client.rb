class Client < ApiTower::Base
	resource_name :clients
  
  class << self
    def stub_params(params)
    	profile_attributes = params[:client][:profile_attributes]
      return {client: params[:client]} unless profile_attributes
      profile_picture = profile_attributes[:picture]
      return {client: params[:client]} unless profile_picture
      return {client: params[:client]} unless profile_picture.is_a?(ActionDispatch::Http::UploadedFile)
      params[:client][:profile_attributes][:picture] = File.new(rename_upload_file(profile_picture))
      return {client: params[:client]}
    end

    def import_params(params)
      return {client: {}} unless params[:client]
      return {client: params[:client]} unless params[:client][:file].is_a?(ActionDispatch::Http::UploadedFile)
      params[:client][:file] = File.new(rename_upload_file(params[:client][:file]))
      return {client: params[:client]}
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
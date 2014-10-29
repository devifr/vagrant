class Apk < ApiTower::Base
  resource_name :apks

  class << self
    def stub_params(params)
      file = params[:apk][:file]
      return {apk: params[:apk]} unless file
      return {apk: params[:apk]} unless file.is_a?(ActionDispatch::Http::UploadedFile)
      params[:apk][:file] = File.new(rename_upload_file(file))
      return {apk: params[:apk]}
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
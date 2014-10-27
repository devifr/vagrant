class Company < ApiTower::Base
  resource_name :companies

  def self.stub_params(params)
    profile_attributes = params[:company][:profile_attributes]
    return {company: params[:company]} unless profile_attributes
    profile_picture = profile_attributes[:picture]
    return {company: params[:company]} unless profile_picture
    return {company: params[:company]} unless profile_picture.is_a?(ActionDispatch::Http::UploadedFile)
    split_name = profile_picture.tempfile.path.split("/")
    split_name.pop
    split_name.push(profile_picture.original_filename)
    new_path = split_name.join("/")
    File.rename(profile_picture.tempfile.path,new_path)
    params[:company][:profile_attributes][:picture] = File.new(new_path)
    return {company: params[:company]}
  end
end
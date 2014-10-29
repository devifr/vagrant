class WorkFormGroupItem < ApiTower::Base
  resource_name :work_form_group_items

  class << self
	  def stub_params(params)
		  value_picture = params[:work_form_group_item][:picture]
      return {work_form_group_item: params[:work_form_group_item]} unless value_picture.is_a?(ActionDispatch::Http::UploadedFile)
      params[:work_form_group_item][:picture] = File.new(rename_upload_file(value_picture))
      return {work_form_group_item: params[:work_form_group_item]}
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
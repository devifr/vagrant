class Schedule < ApiTower::Base
  resource_name :schedules

  DATETYPE =  [
                ["Work Date", "work_date"],
                ["Created Date", "created_at"],
                ["Updated Date", "updated_at"],
              ]

  class << self

    def approve(id, operator_id, args={})
      resource_post("/#{id}/operator/#{operator_id}/approve", args)
    end

    def approve_client(id, args={})
      resource_post("/#{id}/approve", args)
    end

    def hash_values(value_options)
      results = show("items", value_options).first.
                map{|o| [o.work_form_group_item_id.to_s, o]}.flatten
      Hash[*results]
    end

    def import_params(params)
      return {schedule: {}} unless params[:schedule]
      return {schedule: params[:schedule]} unless params[:schedule][:file].is_a?(ActionDispatch::Http::UploadedFile)
      params[:schedule][:file] = File.new(rename_upload_file(params[:schedule][:file]))
      return {schedule: params[:schedule]}
    end

    def rename_upload_file(upload_file)
      split_name = upload_file.tempfile.path.split("/")
      split_name.pop
      split_name.push(upload_file.original_filename)
      new_path = split_name.join("/")
      File.rename(upload_file.tempfile.path, new_path)
      new_path
    end

    def event(data, options={})
      show("#{data}", options)
    end

    def statuses
      [
        ["New", "new"],
        ["On Progress", "progress"],
        ["Pending", "pending"],
        ["Completed", "completed"],
        ["Canceled", "canceled"],
        ["Approved", "approved"],
      ]
    end

  end

end

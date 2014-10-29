class WorkFormItemValuesController < ResourcesController
	defaults resource_class: WorkFormItemValue

	def update_value
		update = WorkFormItemValue.update('update_value', params)
		flash[:notice] = 'Updated Value Success'
		redirect_to preview_schedules_path(id: params[:schedule_id], group_id: params[:group_id], operator_id: params[:operator_id])
	end
end

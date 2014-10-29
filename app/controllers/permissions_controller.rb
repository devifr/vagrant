class PermissionsController < ResourcesController
	 defaults resource_class:  Permission

   def import
    if request.post?
      result = Permission.import(Permission.import_params(params))
      if result.errors.present?
        flash[:alert] = result.errors
      else
        flash[:notice] = result.message
      end
      redirect_to import_permissions_path
    else
      @permission = Permission.show('import')
      @permit_attributes = @permission.permit_attributes.marshal_dump
      @require_attributes = @permission.require_attributes.marshal_dump
    end
  end
  
end
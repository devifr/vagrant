class AccessesController < ResourcesController
	defaults resource_class: Access

  def import
    if request.post?
      result = Access.import(Access.import_params(params))
      if result.errors.present?
        flash[:alert] = result.errors
      else
        flash[:notice] = result.message
      end
      redirect_to import_accesses_path
    else
      @access = Access.show('import')
      @permit_attributes = @access.permit_attributes.marshal_dump
      @require_attributes = @access.require_attributes.marshal_dump
    end
  end

end
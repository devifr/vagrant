class OperatorsController < ResourcesController
  defaults resource_class: Operator

  def import
    if request.post?
      result = Operator.import(Operator.import_params(params))
      if result.errors.present?
        flash[:alert] = result.errors
      else
        flash[:notice] = result.message
      end
      redirect_to import_operators_path
    else
      @operator = Operator.show('import')
      @permit_attributes = @operator.permit_attributes.marshal_dump
      @require_attributes = @operator.require_attributes.marshal_dump
    end
  end

  protected
  def input_parameter
    Operator.stub_params(params)
  end
end


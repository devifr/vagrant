class ServicePointsController < ResourcesController
  defaults resource_class: ServicePoint
  before_filter :prepare_selects, only: [:edit, :new, :update, :create]

  def import
    if request.post?
      result = ServicePoint.import(ServicePoint.import_params(params))
      if result.errors.present?
        flash[:alert] = result.errors
      else
        flash[:notice] = result.message
      end
      redirect_to import_service_points_path
    else
      @service_point = ServicePoint.show('import')
      @permit_attributes = @service_point.permit_attributes.marshal_dump
      @require_attributes = @service_point.require_attributes.marshal_dump
    end
  end
  
  private
  def prepare_selects
    @service_points = ServicePoint.show("select",{per_page: -1}).first
  end
end

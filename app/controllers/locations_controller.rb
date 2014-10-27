class LocationsController < ResourcesController
  defaults resource_class: Location
  before_filter :prepare_selects, only: [:edit, :new, :update, :create]

  def import
    if request.post?
      result = Location.import(Location.import_params(params))
      if result.errors.present?
        flash[:alert] = result.errors
      else
        flash[:notice] = result.message
      end
      redirect_to import_locations_path
    else
      @location = Location.show('import')
      @permit_attributes = @location.permit_attributes.marshal_dump
      @require_attributes = @location.require_attributes.marshal_dump
    end
  end
  
  private
  def prepare_selects
    @locations = Location.show("select",{per_page: -1}).first
  end
end

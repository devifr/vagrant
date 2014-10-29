class SitesController < ResourcesController
  defaults resource_class: Site
  before_filter :prepare_selects, only: [:index,:edit, :new, :update, :create]
 
  def schedules
    render json: Site.show("#{params[:id]}/schedules").first.
                 map{|schedule| result = 
                                {id: schedule.id, 
                                 title: schedule.title, 
                                 start: schedule.start,
                                 progress: schedule.progress,
                                }
                                result.merge!(user: {
                                   id: schedule.user.id,
                                   username: schedule.user.username,
                                   full_name: schedule.user.full_name,
                                   email: schedule.user.email
                                 }) if schedule.user
                                result
                    } 
  end

  def import
    if request.post?
      result = Site.import(Site.import_params(params))
      if result.errors.present?
        flash[:alert] = result.errors
      else
        flash[:notice] = result.message
      end
      redirect_to import_sites_path
    else
      @site = Site.show('import')
      @permit_attributes = @site.permit_attributes.marshal_dump
      @require_attributes = @site.require_attributes.marshal_dump
    end
  end

  def get_operator
    site = Site.show(params[:id])
    site_name = site.operators.map(&:name).join(',')
    site_name = '-' unless site.operators.present?
    render text: site_name
  rescue
    render text: '-'
  end

  private
  def prepare_selects
    unless params[:action] == 'index'
      @clients    = Client.all(template: 'small')
      @locations  = Location.show("select",{per_page: -1}).first
    end
    @operators  = Operator.all(template: 'small')
    @service_points  = ServicePoint.all(template: 'small')
  end
end

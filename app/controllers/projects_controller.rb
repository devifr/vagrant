class ProjectsController < ResourcesController
	defaults resource_class: Project
	before_filter :prepare_selects, only: [:edit, :new, :update, :create]

  def import
    if request.post?
      result = Project.import(Project.import_params(params))
      if result.errors.present?
        flash[:alert] = result.errors
      else
        flash[:notice] = result.message
      end
      redirect_to import_projects_path
    else
      @project = Project.show('import')
      @permit_attributes = @project.permit_attributes.marshal_dump
      @require_attributes = @project.require_attributes.marshal_dump
    end
  end

  def edit
    set_ivar(Project.edit(params[:id], { template: :show }))
  end

  def show 
    set_ivar(Project.show(params[:id], { template: :show }))
  end

	private
	def prepare_selects
		@clients = Client.all
	end
end

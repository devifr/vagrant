class WorkFormGroupItemsController < ResourcesController
	defaults resource_class: WorkFormGroupItem
	before_filter :prepare_selects, only: [:edit, :new, :update, :create]

  def setting
    respond_to do |format|
      format.js
    end
  end

  def setting_fieldset
    respond_to do |format|
      format.js
    end
  end

  def setting_row
    respond_to do |format|
      format.js
    end
  end

  def new
    respond_to do |format|
      format.js
    end
  end

  def create
    set_ivar(resource_class.create(input_parameter))
    after_save
  end

  def edit
    set_ivar(resource_class.edit(params[:id]))
    render js: render_to_string('work_form_group_items/new.js.erb')
  end

  def destroy
    result = resource_class.destroy(params[:id])
    if result
      flash[:notice] = 'Successfully Removed!'
    else
      flash[:error] = 'Failed to Remove Data!'
    end
    redirect_to :back
  end

	protected
    
    def input_parameter
      WorkFormGroupItem.stub_params(params)
    end

  	def prepare_selects
  		@work_form_groups = WorkFormGroup.show("select",{per_page: -1}).first
  	end

    def after_save(render_name=:new)
      if resource.errors.blank?
        flash[:notice] = "#{params[:action].titleize}d successfully! #{undo_link(resource)}"
      else
        flash[:notice] = "#{resource.errors.to_sentence}"
      end
      respond_to do |format|
        format.html {redirect_to edit_work_form_group_path(resource.work_form_group_id)}
      end
    end

    def undo_link(resource)
      return "" unless resource.versions.present?
      view_context.link_to("Undo", revert_version_path(resource.versions.last.id), method: :put)
    end
end

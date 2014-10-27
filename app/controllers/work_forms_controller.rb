class WorkFormsController < ResourcesController
	defaults resource_class:  WorkForm
  before_filter :prepare_selects, only: [:edit, :new, :update, :create]
  
  def show 
    set_ivar(resource_class.show(params[:id], {template: :full}))
  end

  def select
    @work_forms = WorkForm.show('select',{type_id: params[:type_id]}).first
  end

  def items
    @items = WorkFormGroupItem.show('items',{form_id: params[:form_id]}) if params[:form_id].present?
  end

  def clone
    form = WorkForm.clone(params[:work_form_id],params)
    if form.errors.blank?
      flash[:notice] = "Cloned Successfully!"
     else
      flash[:alert] = schedule.errors.full_messages
     end
    redirect_to work_forms_path
  end

	protected
	  def prepare_selects
	  	@operators = Operator.all
      @work_types = WorkType.all
	  	# @work_forms = WorkForm.show("select",{per_page: -1}).first
	  end
end



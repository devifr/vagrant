class WorkFormGroupsController < ResourcesController
	defaults resource_class: WorkFormGroup
  before_filter :prepare_selects, only: [:edit, :new, :update, :create]

  def edit
    @row_index = WorkFormRow.show("select", {group_id: params[:id], per_page: -1}).first
    set_ivar(resource_class.edit(params[:id], {template: 'full'}))
  end

  def show 
    @work_form_group = WorkFormGroup.show(params[:id],{template: 'default'})
  end

  def preview
    set_ivar(resource_class.edit(params[:id], {template: 'full'}))
  end

  def sort
    WorkFormGroup.all.each do |form|
      if position = params[:work_form_groups].index(form.id.to_s)
        form.update_attribute(:position, position + 1) unless form.position ==  position + 1
      end
    end
    render :nothing => true, :status => 200
  end

  private
  def prepare_selects
    @work_forms = WorkForm.all
    @work_form_groups = WorkFormGroup.show("select",{per_page: -1}).first
  end
end
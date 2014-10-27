class WorkFormRowsController < ResourcesController
  defaults resource_class:  WorkFormRow
  before_filter :prepare_groups, only: [:new, :edit]

  def create
    set_ivar(resource_class.create({work_form_row: {
        work_form_group_id: params[:group_id],
        parent_id: params[:work_form_row][:parent_id],
        position: params[:work_form_row][:position],
        report_position: params[:work_form_row][:report_position]
      }
    }))
    after_save
  end

  def mass_delete
    WorkFormRow.mass_destroy(params)
    redirect_to :back
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
    def after_save(render_name=:new)
      if resource.errors.blank?
        flash[:notice] = "#{params[:action].titleize}d successfully! #{undo_link(resource)}"
      else
        flash[:error] = "#{resource.errors.to_sentence}"
      end
      redirect_to :back
    end

    def prepare_groups
      @rows = WorkFormRow.show("select", {group_id: params[:group_id], per_page: -1}).first
    end

    def undo_link(resource)
      return "" unless resource.versions.present?
      view_context.link_to("Undo", revert_version_path(resource.versions.last.id), method: :put)
    end
end



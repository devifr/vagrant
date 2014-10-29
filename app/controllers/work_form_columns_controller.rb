class WorkFormColumnsController < ResourcesController
  defaults resource_class:  WorkFormColumn
  
  def show 
    set_ivar(resource_class.show(params[:id], {template: :full}))
  end

  def create
    set_ivar(resource_class.create({work_form_column: {work_form_group_id: params[:group_id]}}))
    after_save
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
        respond_to do |format|
          format.html {redirect_to send(edit_resource_url, resource.id)}
          format.js
          format.json { head :no_content }
        end
      else
        respond_to do |format|
          format.html {render action: render_name}
          format.js
          format.json { render json: resource.errors, status: :unprocessable_entity }
        end
      end
    end

    def undo_link(resource)
      return "" unless resource.versions.present?
      view_context.link_to("Undo", revert_version_path(resource.versions.last.id), method: :put)
    end
end



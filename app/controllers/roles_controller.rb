class RolesController < ResourcesController
  defaults resource_class:  Role
  before_filter :prepare_relation, only: [:edit, :new, :update, :create]

  def import
    if request.post?
      result = Role.import(Role.import_params(params))
      if result.errors.present?
        flash[:alert] = result.errors
      else
        flash[:notice] = result.message
      end
      redirect_to import_roles_path
    else
      @role = Role.show('import')
      @permit_attributes = @role.permit_attributes.marshal_dump
      @require_attributes = @role.require_attributes.marshal_dump
    end
  end

  def destroy_level
    if request.post?
      @level = Level.destroy(params[:id])
      render text: @level
    end
  end

  private
  def prepare_relation
    @permissions = Permission.all
    @accesses = Access.all
    @roles = Role.all
    @parents = Role.show('/select',{per_page: -1}).first
  end

end


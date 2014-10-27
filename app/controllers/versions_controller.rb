class VersionsController < ResourcesController
  defaults resource_class:  Version

  def revert
    @version = Version.revert(params[:id])
    link_name = params[:redo] == "true" ? "undo" : "redo"
    link = view_context.link_to(link_name, revert_version_path(@version.next.id, :redo => !params[:redo]), method: :put)
    redirect_to :back, notice: "undid #{@version.event}. #{link}"
  end

end

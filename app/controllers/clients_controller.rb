class ClientsController < ResourcesController
  defaults resource_class:  Client
  before_filter :prepare_selects, only: [:edit, :new, :update, :create]

  def import
    if request.post?
      result = Client.import(Client.import_params(params))
      if result.errors.present?
        flash[:alert] = result.errors
      else
        flash[:notice] = result.message
      end
      redirect_to import_clients_path
    else
      @client = Client.show('import')
      @permit_attributes = @client.permit_attributes.marshal_dump
      @require_attributes = @client.require_attributes.marshal_dump
    end
  end

  def edit
    set_ivar(Client.edit(params[:id], { template: :table }))
  end

  def show 
    set_ivar(Client.show(params[:id], { template: :table }))
  end

  protected
  def input_parameter
    Client.stub_params(params)
  end

  def prepare_selects
    @locations  = Location.show("select",{per_page: -1}).first
  end
end

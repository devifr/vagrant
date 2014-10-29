class ResourcesController < ApplicationController
  before_filter :authorize_access, only: [:index, :new, :create,  :edit, :update, :delete]

  def index
    if 1 === params[:export].to_i
      params[:per_page] = -1
      cols = collection('export')
      csv =  CSV.generate do |csv|
              CSV.parse(cols).map{|row| csv << row}
            end
      send_data csv, type: 'application/octet-stream', disposition: 'attachment', 
                filename: "#{resource_config[:instance_name]}_#{Time.now.to_i}.csv"
    else
      collection
    end
  end

  def clean_db
    if current_user.role_code == 'SADM'
      set_ivar(resource_class.clean_db)
      flash[:notice] = 'Successfully clean table from database!'
    else
      flast[:alert] = 'You have no authorized'
    end
    redirect_to send("#{routes_name.pluralize}_path")
  end

  def edit
    set_ivar(resource_class.edit(params[:id]))
  end

  def update
    set_ivar(resource_class.update(params[:id], input_parameter))
    after_save(:edit)
  end

  def mass_delete
    set_ivar(resource_class.mass_destroy(input_parameter))
    flash[:notice] = 'Successfully Removed!'
    redirect_to send("#{routes_name.pluralize}_path")
  end

  def create
    set_ivar(resource_class.create(input_parameter))
    after_save
  end

  def show 
    set_ivar(resource_class.show(params[:id]))
  end

  def destroy
    resource_class.destroy(params[:id])
    flash[:notice] = 'Successfully Removed!'
    redirect_to send("#{routes_name.pluralize}_path")
  end

  def after_save(render_name=:new)
    if resource.errors.blank?
      flash[:notice] = "#{params[:action].titleize}d successfully! #{undo_link(resource)}"
      redirect_to send(edit_resource_url, resource.id)
     else
       render action: render_name
     end
  end


  def self.inherit_resources(base)
    base.class_eval do
      helper_method :resource, :collection, :resource_class, :routes_name
      self.class_attribute :resource_class, instance_writer: false unless self.respond_to? :resource_class
      self.class_attribute :resource_config, instance_writer: true
      protected :resource_class, :resource_config
    end
  end

  protected
    def self.defaults(options)
      options.symbolize_keys!
      options.assert_valid_keys(:resource_class, :collection_name, :instance_name)
      self.resource_class = options[:resource_class] if options.key?(:resource_class)
      self.resource_config = options

      raise "Please provide resource class name" if self.resource_class.blank?
     
      instance_name = resource_class.name.tableize.singularize.gsub(/\W/,'_')

      if self.resource_config[:instance_name].blank?
        self.resource_config[:instance_name] = instance_name
      end

      if self.resource_config[:collection_name].blank?
        self.resource_config[:collection_name] = instance_name.pluralize
      end
    end

    def authorize_access
      if resource_sym == :user && params[:id].to_i == current_user.id
        return true
      elsif !allow?(resource_sym, [action_sym]) && !is_superadmin?
        raise CanCan::AccessDenied 
      end
    end

    def resource_sym
      resource_class.name.downcase.to_sym
    end

    def action_sym
      params[:action].gsub('new','create').gsub('edit','update').to_sym
    end

    def set_ivar(result)
      instance_variable_set(ivar_name, result)
    end

    def set_icol(results)
      instance_variable_set(icol_name, results)
    end

    def resource
      instance_variable_get(ivar_name)
    end

    def collection(method_name='index')
      instance_variable_get(icol_name) || begin
        params_default = { 
                            keywords: params[:keywords], 
                            page:     page, 
                            per_page: per_page,
                            start_on: params[:start_on],
                            end_on:   params[:end_on]
                          } 
        records, @pagination = resource_class.send(method_name,params_default.merge(params))
        set_icol(records)
      #rescue
      #  set_icol([])
      end
    end

    def ivar_name
      @ivar_name ||= "@#{resource_config[:instance_name]}"
    end

    def icol_name
      @icol_name ||= "@#{resource_config[:collection_name]}"
    end

    def routes_name
      @routes_name || resource_class.name.tableize.singularize.gsub(/\W/,'_')
    end

    def edit_resource_url
      "edit_#{routes_name}_path"
    end

    def input_parameter
      {resource_config[:instance_name] => params[resource_config[:instance_name].to_sym]}
    end

    def undo_link(resource)
      return "" unless resource.versions.present?
      view_context.link_to("Undo", revert_version_path(resource.versions.last.id), method: :put)
    end
   
  inherit_resources(self)
end

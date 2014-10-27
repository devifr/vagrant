class SchedulesController < ResourcesController
  defaults resource_class: Schedule
  before_filter :prepare_selects, only: [:index,:edit, :new, :update, :create]

  def event
    render json: Schedule.event('calendar', {per_page: -1, start_on: params[:start_on], end_on: params[:end_on]}).
                 sort{|x,y| x.start <=> y.start}.
                 map{|schedule| {id: schedule.id, title: schedule.title, start: schedule.start } }
  end

  def show_event
  end

  def get_group_type(group)
  end

  def edit
    super
    @work_forms = WorkForm.show('select', {type_id: @schedule.work_type_id}).first if @schedule
  end

  def approve
    Schedule.approve(params[:id], params[:operator_id], {operator_id: params[:operator_id], status: params[:status], note: params[:note]})
    redirect_to :back
  end

  def approve_client
    Schedule.approve_client(params[:id], {status: params[:status], note: params[:note]})
    redirect_to :back
  end

  def report
    @users = User.all(template: 'simple') unless params[:format] == 'pdf'
    @schedule = Schedule.show(params[:id], {template: 'full'})
    @work_type = @schedule.work_type
    @work_groups = @work_type.forms[0].groups
    @operator = Operator.show(params[:operator], {template: 'full'})
    @user = @schedule.user.full_name
    @file_name = "#{Time.at(@schedule.work_date).strftime('%d_%m_%Y')}_#{@work_type.name}_#{@schedule.site.name.downcase.gsub(/\W/,'_')}_#{@operator.name.downcase}.pdf"

    @results = {}
    value_options = {
                      group_type: 'photo',
                      schedule_id: @schedule.id,
                      operator_id: @operator.id,
                      site_id: @schedule.site_id,
                      per_page: -1
                    }

    @work_groups.each do |group|
      group_type =  if group.name =~ /site|preventive/i
                      'site'
                    elsif group.name =~ /check/i
                      'checklist'
                    elsif group.name =~ /photo/i
                      'photo'
                    else
                      nil
                    end
      next unless group_type
      next if @results[group_type].present?
      @results[group_type.to_sym] = {
        group:    WorkFormGroup.show(group.id, {template: 'report'}),
        values:   Schedule.hash_values(value_options.merge(group_type: group_type))
      }

      if group_type == 'photo'
        @results[group_type.to_sym][:photo_fields] = @results[:photo][:group].table.rows.map do |_row|
          next unless _row
          _row.row_columns.map do |_row_column|
            next unless _row_column.items
            _row_column.items.select do |_item|
             _item.field_type.to_s == 'file'
            end
          end
        end.flatten.compact
      else
        @results[group_type.to_sym][:indexes] = WorkFormRow.show("select", {group_id: group.id, per_page: -1}).first
      end
    end if @work_groups.present?

    respond_to do |format|
      format.html
      format.pdf do
        render pdf: @file_name,
               disposition: 'attachment',
               show_as_html: params[:as_html].present?,
               layout: params[:layout].present?,
               page_size: 'A4'
      end
    end
  end

  def preview_audit
    @users = User.all(template: 'simple') unless params[:format] == 'pdf'
    @schedule = Schedule.show(params[:id], {template: 'full'})
    @work_type = @schedule.work_type
    @work_groups = @work_type.forms[0].groups
    @user = @schedule.user.full_name
    @file_name = "#{Time.at(@schedule.work_date).strftime('%d_%m_%Y')}_#{@work_type.name}_#{@schedule.site.name.downcase.gsub(/\W/,'_')}"

    @results = {}
    value_options = {
                      group_type: 'photo',
                      schedule_id: @schedule.id,
                      site_id: @schedule.site_id,
                      per_page: -1
                    }

    @work_groups.sort{ |x,y| x.id <=> y.id }.each do |group|
      group_type =  if group.name == 'Site Info'  
                      'site_info'
                    elsif group.name == 'Project Charter'
                      'site_project'
                    elsif group.name == 'General Site Information Check'
                      'general'
                    elsif group.name == 'Site Layout & Supporting Facilities'
                      'mini_checklist'
                    elsif group.name == 'Site Basic Lease & Access Information Check'
                      'site_basic'
                    elsif group.name == 'Technical/Engineering Check List'
                      'enginer_checklist'
                    elsif group.name == 'Equipment Placement Check'
                      'placement_check'
                    elsif group.name =~ /photo/i
                      'photo'
                    else
                      nil
                    end
      next unless group_type
      next if @results[group_type].present?
      @results[group_type.to_sym] = {
        group:    WorkFormGroup.show(group.id, {template: 'report'}),
        values:   Schedule.hash_values(value_options.merge(group_type: group_type))
      }
      if group_type == 'photo'
        @results[group_type.to_sym][:fields] = @results[:photo][:group].table.rows.map do |_row|
          next unless _row
          _row.row_columns.sort{|x,y| x.id <=> y.id}.map do |_row_column|
            next unless _row_column.items
            _row_column.items.select do |_item|
              _item
            end
          end
        end.flatten.compact
      else
        @results[group_type.to_sym][:indexes] = WorkFormRow.show("select", {group_id: group.id, per_page: -1}).first
      end
    end if @work_groups.present?

    respond_to do |format|
      format.html
      format.pdf do
        render pdf: @file_name,
               disposition: 'attachment',
               show_as_html: params[:as_html].present?,
               layout: params[:layout].present?,
               header: { :right => '[page] of [topage]' },
               page_size: 'A4'
      end
    end
  end

  def preview
    @users = User.all(template: 'simple') unless params[:format] == 'pdf'
    @schedule = Schedule.show(params[:id], {template: 'default'})
    @operator = Operator.show(params[:operator_id], {template: 'full'})
    @client = Client.show(@schedule.site.client.id, {template: 'table'}) if @schedule.site.client.present?
    @work_form_group = WorkFormGroup.show(params[:group_id], {template: 'report'})
    @file_name = "#{Time.at(@schedule.work_date).strftime('%d_%m_%Y')}_#{@work_form_group.name}_#{@schedule.site.name.downcase.gsub(/\W/,'_')}_#{@operator.name.downcase}.pdf"
    @footer = "#{@operator.name.titleize} - #{@schedule.site.name.titleize} - #{@work_form_group.name.titleize}"

    value_options = {
                      group_type: 'photo',
                      schedule_id: @schedule.id,
                      operator_id: @operator.id,
                      site_id: @schedule.site_id,
                      per_page: -1
                    }

    if @work_form_group.name =~ /Checklist|(Site Information)/i
      @row_index = WorkFormRow.show("select", {group_id: params[:group_id], per_page: -1}).first

      if @work_form_group.name == "Site Information"
        value_options.merge!(group_type: 'site')
        @item_values = Schedule.hash_values(value_options)
        respond_to do |format|
          format.html do
            render 'shares/preview/_site_information', locals: {schedule: @schedule, work_form_group: @work_form_group, operator: @operator }
          end
          format.pdf do
            render pdf: @file_name,
                   file: "/shares/preview/_site_information.pdf.erb",
                   locals: {schedule: @schedule,operator: @operator,work_form_group: @work_form_group},
                   disposition: 'attachment',
                   show_as_html: params[:as_html].present?,
                   layout: params[:layout].present?,
                   page_size: 'A4',
                   footer: { right: '[page] of [topage]', left:  @footer, font_size: 6, line: true, spacing: 0},
                   header: { line: true, spacing: 0}
          end
        end
      elsif @work_form_group.name == "Checklist"
        value_options.merge!(group_type: 'checklist')
        @item_values = Schedule.hash_values(value_options)
        respond_to do |format|
          format.html do
            render 'shares/preview/_checklist', locals: {schedule: @schedule, work_form_group: @work_form_group, operator: @operator }
          end
          format.pdf do
            render pdf: @file_name,
                   file: "/shares/preview/_checklist.pdf.erb",
                   locals: {schedule: @schedule,operator:@operator,work_form_group: @work_form_group},
                   disposition: 'attachment',
                   show_as_html: params[:as_html].present?,
                   layout: params[:layout].present?,
                   page_size: 'A4',
                   footer: { right: '[page] of [topage]', left:  @footer, font_size: 6, line: true, spacing: 0},
                   header: { line: true, spacing: 0}
          end
        end
      end

    elsif (@work_form_group.name == "Photograph")
      @item_values = Schedule.hash_values(value_options)
      prepare_photo_report
    else
      flash[:alert] = 'Sorry, Not Have Form Template'
      redirect_to :back
    end
  end

  def preview_corrective
    @users = User.all(template: 'simple') unless params[:format] == 'pdf'
    @schedule = Schedule.show(params[:id], {template: 'default'})
    @operator = Operator.show(params[:operator_id], {template: 'small'})
    value_options = {
                      group_type: 'photo',
                      schedule_id: @schedule.id,
                      operator_id: params[:operator_id],
                      site_id: @schedule.site_id,
                      per_page: -1
                    }
    @item_values = Schedule.hash_values(value_options)
    prepare_photo_report_corrective
  end

  def reschedule
    if params[:corrective_ids].present?
      schedule = Schedule.reschedule(params)
      if schedule.errors.blank?
        flash[:notice] = "reschedule successfully!"
       else
        flash[:alert] = schedule.errors.full_messages
       end
      redirect_to :back
     else
      flash[:alert] = "No Data To Reschedule"
      redirect_to :back
     end
  end

  def import
    if request.post?
      result = Schedule.import(Schedule.import_params(params))
      if result.errors.present?
        flash[:alert] = result.errors
      else
        flash[:notice] = result.message
      end
      redirect_to import_schedules_path
    else
      @schedule = Schedule.show('import')
      @permit_attributes = @schedule.permit_attributes.marshal_dump
      @require_attributes = @schedule.require_attributes.marshal_dump
    end
  end

  def site_list
    @schedules = Schedule.show('site_list', {start_date: params[:start_date], end_date:   params[:end_date]})
    @date_schedules = @schedules.first.group_by{|x| x.work_date_str.to_date}
  end

  private
    def prepare_selects
      @users = User.all(template: 'select')
      unless params[:action] == 'index'
        @sites = Site.all(template: 'small')
        # @clients = Client.all
        # @operators = Operator.all
        @projects = Project.all
      end
      @work_types = WorkType.all(template: 'small')
    end

    def prepare_photo_report
      @photo_fields =  @work_form_group.table.rows.map do |_row|
          next unless _row
          _row.row_columns.map do |_row_column|
            next unless _row_column.items
            _row_column.items.select do |_item|
             _item.field_type.to_s == 'file'
            end
          end
        end.flatten.compact

      respond_to do |format|
        format.html do
          render 'shares/preview/_photograph', locals: {schedule: @schedule, work_form_group: @work_form_group, operator: @operator }
        end
        format.pdf do
          render pdf: @file_name,
                 disposition: 'attachment',
                 show_as_html: params[:as_html].present?,
                 layout: params[:layout].present?,
                 page_size: 'A4',
                 footer: { right: '[page] of [topage]', left:  @footer, font_size: 6, line: true, spacing: 0},
                 header: { line: true, spacing: 0}
        end
          #render :pdf => 'shares/preview/_photograph', locals: {schedule: @schedule, work_form_group: @work_form_group, operator: @operator }, layout: false
        #end
      end
    end

    def prepare_photo_report_corrective
      @file_name = "#{Time.at(@schedule.work_date).strftime('%d_%m_%Y')}_photograph_#{@schedule.site.name.downcase.gsub(/\W/,'_')}_#{@operator.name.downcase}.pdf"
      @photo_fields = WorkFormItemValue.all({template: "full",site_id: @schedule.site_id ,operator_id: @operator.id, schedule_id: @schedule.id, per_page: -1})
      respond_to do |format|
        format.html do
          render 'shares/preview/_photograph_corrective', locals: {schedule: @schedule, operator: @operator }
        end
        format.pdf do
          render pdf: @file_name,
                 file: "/shares/preview/_photograph_corrective.pdf.erb",
                 disposition: 'attachment',
                 show_as_html: params[:as_html].present?,
                 layout: params[:layout].present?,
                 page_size: 'A4'
        end
      end
    end

    def after_save(render_name=:new)
      if resource.errors.blank?
        flash[:notice] = "#{params[:action].titleize}d successfully! #{undo_link(resource)}"
        redirect_to send(edit_resource_url, resource.id)
       else
         @work_forms = WorkForm.show('select', {type_id: @schedule.work_type_id}).first if @schedule
         render action: render_name
       end
    end

end

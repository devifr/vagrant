module ApplicationHelper
  def export_url
    concator = request.url.match(/\?/) ? "&" : "?"
    "#{request.url}#{concator}export=1"
  end

  def import_url
    "#{request.url}/import"
  end

  def custom_image_url(_image_name)
    "http://mobile-api.sekap.net/system/#{_image_name}"
  end

  def can_approve?
    return false unless current_user
    return false unless current_user.role
    ['APP1', 'APP2'].include?(current_user.role.code.to_s.upcase) || is_client?
  end

  def get_clean_db_path
    path_name = "clean_database_#{controller.controller_name}_path"
    return false unless respond_to?(path_name)
    send(path_name)
  end

	def display_errors!(res)
		if res && res.respond_to?(:errors) && res.errors.present?
			messages = res.errors.uniq.map{|msg| content_tag(:li, msg)}.join
			html = <<-HTML
			  <div class="alert alert-error" id="gradien">
			  	<button type="button" class="close" data-dismiss="alert">x</button>
			  	<strong> Sorry, you have #{res.errors.count} errors with the following detail :</strong>
			  	<br>
			  	<ul>#{messages}</ul>
			  </div>
			HTML
			html.html_safe
		end
	end

  def show_approval_button(client_approvals, approvers, operator_size=nil, approvers_size=nil)
    unless operator_size.nil?
      return (approvers_size / 2) == operator_size && client_approvals.blank?
    end
    !approvers.map(&:user_id).include?(current_user.id)
  end

  def status_schedule(approvers, client_approvals, rejecters_all, operator_size=nil, approvers_size=nil)
    return raw "<b>REJECTED</b>" if rejecters_all.present? && !is_client?
    if operator_size.present? && approvers_size.present?
      return raw "<b>AWAITING APPROVAL</b>" if (approvers_size / 2) == operator_size && client_approvals.blank?
    else
      return raw "<b>AWAITING APPROVAL</b>" if approvers.size == 2 && client_approvals.blank?
    end
    if approvers.size > 1 || client_approvals.size > 0
      if client_approvals.present?
        return raw "<b>COMPLETED</b>"
      end
    end
    raw "<b>ON PROGRESS</b>"
  end

  def new_status_schedule(schedule)
    if current_user.client_id
      if schedule.client_status == 'approved'
        'COMPLETED'
      else
        status_mapping[schedule.internal_status]
      end
    elsif schedule.internal_status.to_s == 'approved'
      if schedule.client_status == 'approved'
        'COMPLETED'
      elsif schedule.client_status == 'rejected'
        'CLIENT REJECTED'
      else
        'WAITING CLIENT'
      end
    else
      status_mapping[schedule.internal_status]
    end
  end

  def status_mapping
    {
      'pending' => 'ON PROGRESS',
      'rejected' => 'REJECTED',
      'verify' => 'WAITING APPROVAL'
    }
  end

  def secure_date(value)
    datetime = value
    if [String, Fixnum, Bignum].include?(value.class) && value.to_i > 100000000
      datetime = Time.at(value.to_i)
    end
    return datetime
  end

  def timepicker_format(value)
    begin
      datetime = secure_date(value).utc
    rescue
      return value
    end

    return "" unless datetime
    begin
      current_time = datetime.strftime('%Y-%m-%d %H:%M')
    rescue
      current_time = Time.parse(value).utc.strftime('%Y-%m-%d %H:%M') rescue nil
    end
    current_time

  end

  def select_tree(collection, selected=nil, is_recursive=false, field_name='name')
    html = is_recursive ? "" : '<option value="">Select Any</option>'
    collection.each do |item|
      select_html = ''

      if selected.to_s == item.id.to_s
        select_html = 'selected="selected"'
      end if selected

      html << %{
        <option #{select_html} value="#{item.id}">
          #{ ' - ' * item.total_ancestor.to_i }#{item.send(field_name).to_s.titleize}
        </option>
      }
      html << select_tree(item.children, selected, true, field_name) if item.children.present?
    end
    html.html_safe
  end

  def select_row(collection, selected=nil, is_recursive=false)
  	html = is_recursive ? "" : '<option value="">Select Any</option>'
  	collection.each_with_index do |item,index|
  		select_html = ''

  		if selected.to_s == item.id.to_s
  		  select_html = 'selected="selected"'
      end if selected

      # value = index + 1
      # value = item.name


      html << %{
        <option #{select_html} value="#{item.id}">
          #{ item.name }
        </option>
      }
      chidren_select(item,html,selected) if item.children.present?
    end
    html.html_safe
  end

  def chidren_select(item,html,selected=nil)
    # new_value = value
    item.children.each_with_index do |itm,n|
      # new_value = "#{value}.#{n+1}"

      if selected.to_s == itm.id.to_s
        select_html = 'selected="selected"'
      end if selected

      html << %{
        <option #{select_html} value="#{itm.id}">
          #{ itm.name }
        </option>
      }
      chidren_select(itm,html) if itm.children.present?
    end
    # new_value
  end

  def row_index(items,html={}, only_ids=nil)
    _counter = 1

    items.each_with_index do |item,index|
      next if html[item.id].present?

      if (only_ids.present? && only_ids.include?(item.id)) || only_ids.blank?
        html[item.id] = _counter
        row_children(item, html[item.id], html, 1) if item.children.present?
        _counter += 1
      end

    end
    html
  end

  def row_children(item,value,html, counter)
    item.children.each_with_index do |itm,n|
      next if html[itm.id].present?
      html[itm.id] = [value, counter].join('.')
      row_children(itm,html[itm.id],html,1) if itm.children.present?
      counter += 1
    end
  end

  def profile_attr(instance,value)
    return "" unless instance.profile
    instance.profile.send(value)
  end

  def address_attr(instance,value)
    return "" unless instance.profile
    return "" unless instance.profile.address
    instance.profile.address.send(value)
  end

  def paginate(pagination, options = {}, &block)
    return "" unless pagination
    paginator = Kaminari::Helpers::Paginator.new self, options.reverse_merge(:current_page => pagination.current.to_i, :total_pages => pagination.total.to_i, :per_page => pagination.limit.to_i, :param_name => Kaminari.config.param_name, :remote => false)
    paginator.to_s
  end

  def is_admin?
    current_user.role_name.to_s.match(/admin/i)
  end

  def is_client?
    current_user.client_id
  end

  def is_superadmin?
    current_user.role_code.to_s == 'SADM' || current_user.role_name.to_s.match(/superadmin/i)
  end

  def sidebar_active_if(key)
    accesses = current_user.role.levels.map(&:access_name) rescue []
    keys = []
    keys = key.join(',').camelcase.split(',') if key.is_a?(Array)

    if is_admin? || accesses.include?(key.to_s.camelcase) || keys.any? {|k| accesses.include?(k) }
      return "" if !params[:controller].tableize.singularize.gsub('::','_').eql?(key.to_s) || is_admin?
      "active"
    else
      "hide"
    end
  end

  def allow?(key,perm)
    permission = get_permission(key)
    return false unless permission
    perms = perm.map(&:'to_s').uniq.select(&:'present?')
    permission.include?('manage') || ( perms & permission).present?
  end

  def permission_active_if(key, perm)
    allow?(key,perm) ? '' : 'hide'
  end

  def get_permission(key)
    found_permission = nil
    current_user.role.levels.each do |level|
      class_name = level.access_name
      if class_name && (class_name.include?(key.to_s.camelcase) || class_name.gsub('::','').downcase == key.to_s.downcase)
       found_permission = level.permission_list
       break
      end
    end
    found_permission
  end

  def remove_link(path,key,perm)
    permission = get_permission(key)
    return '#' unless permission
    perms = perm.map(&:'to_s').uniq.select(&:'present?')
    if permission.include?('manage') || ( perms & permission).present?
      path
    else
      "#"
    end
  end

  def column_identifier(column)
    [
      column.column_id.to_s.downcase.gsub(/\W/,'_'),
      column.id
    ].join('_')
  end

  def item_field(last_key=nil)
    "work_form_group_item"
  end

  def option_field(last_key=nil)
    last_key = @last_key||=Time.now.to_i unless last_key

    "#{item_field}[options_attributes][#{last_key}]"
  end

  def item_field_for(field_type)
    "work_form_group_item_#{field_type}"
  end

  def item_field_option_for(field_type)
    "work_form_group_item_options_attributes__#{field_type}"
  end

  def get_item_field(item)
    html = []
    if item.field_type == "label"
     item.label.present? ? item.label.titleize : "#{item.field_type}"

    elsif item.field_type == "text_field"
      "#{item.label} #{text_field_tag(item.label,'',style: 'width:30%')} #{item.description}".html_safe

    elsif item.field_type == "checkbox"
      item.options.each do |opt|
        html << check_box_tag(opt.value) + "#{opt.label}"
      end
      "#{item.label}".html_safe +
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "radio"
      item.label
      item.options.each do |opt|
        html << radio_button_tag("",opt.value) + "#{opt.label}"
      end
      "#{item.label}".html_safe +
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "dropdown"
      select_tag("", options_for_select(item.options.collect {|p| [ p.label, p.value ] }))
    else
      ""
    end
  end

  def get_item_preview_site(item, values={})
    html = []
    value_html = ''
    values = @item_values if @item_values.present?
    item_value = values[item.id.to_s]
    if item.field_type == "label"
      unless item.label =~ /site information/i || item.label =~ /general information/i
         item.label.present? ? "<b>#{item.label.titleize}</b>
                                <div class='br'></div>".html_safe :
                                "#{item.field_type}"
      end
    elsif item.field_type == "text_field"
      field_value = item_value.value if item_value
      id_value = item.id
      "<label class='control-label'>#{item.label}</label>
        <div class='controls'>
          <input type='text' name='#{id_value}' value='#{field_value}' class='full_input_report'>
          #{item.description}
          <div class='separator'></div>
        </div>".html_safe

    elsif item.field_type == "checkbox"
      selected_values = []
      id_value = item.id
      selected_values = item_value.value.to_s.split(',') if item_value
      value_html += "<label class='control-label'>#{item.label}</label>".html_safe
      value_html += "<div class='controls'>".html_safe
      item.options.each do |opt|
        html << "<div class='spacing'>"+ check_box_tag("#{id_value}", opt.value, selected_values.include?(opt.value)) + "#{opt.label}</div>"
      end
      value_html += html.join("").html_safe
      value_html +="<div class='separator'></div>".html_safe
      value_html += "</div>".html_safe
      value_html.html_safe
    elsif item.field_type == "radio"
      is_selected = false
      value_html += "<label class='control-label'>#{item.label}</label>".html_safe
      value_html += "<div class='controls'>".html_safe
      item.options.each do |opt|
        is_selected = opt.value.downcase == item_value.value.to_s.downcase if item_value
        id_value = item.id
        html << "<div class='spacing'>"+ radio_button_tag("#{id_value}",opt.value,is_selected) +"#{opt.label}</div>"
      end
      value_html += html.join("").html_safe
      value_html += "<div class='separator'></div>".html_safe
      value_html += "</div>".html_safe
      value_html.html_safe
    elsif item.field_type == "dropdown"
      id_value = item.id
      selected_value = !item_value ? nil : item_value.value
      select_tag("#{id_value}", options_for_select(item.options.collect {|p| [ p.label, p.value ] }, selected_value))
    else
      ""
    end
  end

  def get_item_preview(item, values={})
    html = []
    values = @item_values if @item_values.present?
    item_value = values[item.id.to_s]

    if item.field_type == "label"
     item.label.present? ? "#{item.label.titleize} #{item.description}" : "#{item.field_type}"

    elsif item.field_type == "text_field"
      field_value = item_value.value if item_value
      "#{item.label}
        <input type='text' value='#{field_value}' class='dashed_input_report' style='background-color: #fff!important'>
       #{item.description}".html_safe

    elsif item.field_type == "checkbox"
      selected_values = []
      selected_values = item_value.value.to_s.split(',') if item_value
      item.options.each do |opt|
        html << check_box_tag("cb_#{item.id}", opt.value, selected_values.include?(opt.value)) + "#{opt.label}"
      end
      "#{item.label}".html_safe +
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "radio"
      is_selected = false
      item.options.each do |opt|
        is_selected = opt.value.downcase == item_value.value.to_s.downcase if item_value
        html << radio_button_tag("radio_#{item.id}",opt.value,is_selected) + "#{opt.label}"
      end
      "#{item.label}".html_safe +
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "dropdown"
      selected_value = !item_value ? nil : item_value.value
      select_tag("dd_#{item.id}", options_for_select(item.options.collect {|p| [ p.label, p.value ] }, selected_value))
    else
      ""
    end
  end

  def get_item_preview_checklist(item, values={})
    html = []
    values = @item_values if @item_values.present?
    item_value = values[item.id.to_s]

    if item.field_type == "label"
     item.label.present? ? "#{item.label.titleize} #{item.description}" : "#{item.field_type}"

    elsif item.field_type == "text_field"
      field_value = item_value.value if item_value
      "#{item.label}
        <input type='text' value='#{field_value}' class='dashed_input_report' style='background-color: #fff!important'>
       #{item.description}".html_safe

    elsif item.field_type == "checkbox"
      selected_values = []
      selected_values = item_value.value.to_s.split(',') if item_value
      item.options.each do |opt|
        html << check_box_tag("cb_#{item.id}", opt.value, selected_values.include?(opt.value)) + "#{opt.label}"
      end
      "#{item.label}".html_safe +
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "radio"
      is_selected = false
      item.options.each do |opt|
        is_selected = opt.value.downcase == item_value.value.to_s.downcase if item_value
        html << radio_button_tag("radio_#{item.id}",opt.value,is_selected) + "#{opt.label}"
      end
      "#{item.label} <br/>".html_safe +
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "dropdown"
      selected_value = !item_value ? nil : item_value.value
      select_tag("dd_#{item.id}", options_for_select(item.options.collect {|p| [ p.label, p.value ] }, selected_value))
    else
      ""
    end
  end

  def get_item_preview_audit_checklist(item, values={})
    html = []
    values = @item_values if @item_values.present?
    item_value = values[item.id.to_s]

    if item.field_type == "label"
     item.label.present? ? "#{item.label.titleize} #{item.description}" : "#{item.field_type}"

    elsif item.field_type == "text_field"
      field_value = item_value.value if item_value
      "#{item.label}
        <input type='text' value='#{field_value}' class='dashed_input_report' style='background-color: #fff!important'>
       #{item.description}".html_safe

    elsif item.field_type == "checkbox"
      selected_values = []
      selected_values = item_value.value.to_s.split(',') if item_value
      item.options.sort{|a,b| a.id <=> b.id }.each do |opt|
        html << check_box_tag("cb_#{item.id}", opt.value, selected_values.include?(opt.value)) + "#{opt.label}"
      end
      "#{item.label}".html_safe +
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "radio"
      is_selected = false
      item.options.sort{|a,b| a.id <=> b.id }.each do |opt|
        is_selected = opt.value.downcase == item_value.value.to_s.downcase if item_value
        html << radio_button_tag("radio_#{item.id}",opt.value,is_selected) + "#{opt.label}"
      end
      "#{item.label} <br/>".html_safe +
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "dropdown"
      selected_value = !item_value ? nil : item_value.value
      selected_value
    else
      ""
    end
  end

  def get_item_preview_audit_checklist_pdf(item, values={})
    html = []
    values = @item_values if @item_values.present?
    item_value = values[item.id.to_s]

    if item.field_type == "label"
     item.label.present? ? "#{item.label.titleize} #{item.description}" : "#{item.field_type}"

    elsif item.field_type == "text_field"
      field_value = item_value.value if item_value
      align_right = ''
      align_right = 'text-right' if item.description.present? && item.label.blank?
      "<div class='dashed_input_report #{align_right}' style='background-color: #fff!important'>#{item.label} #{field_value} #{item.description}</div>
       ".html_safe

    elsif item.field_type == "checkbox"
      selected_values = []
      selected_values = item_value.value.to_s.split(',') if item_value
      item.options.sort{|a,b| a.id <=> b.id }.each do |opt|
        html << check_box_tag("cb_#{item.id}", opt.value, selected_values.include?(opt.value)) + "#{opt.label}"
      end
      "#{item.label}".html_safe +
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "radio"
      is_selected = false
      item.options.sort{|a,b| a.id <=> b.id }.each do |opt|
        is_selected = opt.value.downcase == item_value.value.to_s.downcase if item_value
        html << radio_button_tag("radio_#{item.id}",opt.value,is_selected) + "#{opt.label}"
      end
      label = "#{item.label}".html_safe
      label = "#{item.label} <br/>".html_safe if item.label.present?
      label + html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "dropdown"
      selected_value = !item_value ? nil : item_value.value
      selected_value
    else
      ""
    end
  end

  def get_item_preview_no_label_blank(item, values={})
    html = []
    values = @item_values if @item_values.present?
    item_value = values[item.id.to_s]

    if item.field_type == "label"
     item.label.present? ? "#{item.label.titleize} #{item.description}" : ""

    elsif item.field_type == "text_field"
      field_value = item_value.value if item_value
      "#{item.label}
        <input type='text' value='#{field_value}' class='dashed_input_report' style='background-color: #fff!important'>
       #{item.description}".html_safe

    elsif item.field_type == "checkbox"
      selected_values = []
      selected_values = item_value.value.to_s.split(',') if item_value
      item.options.sort{|a,b| a.id <=> b.id }.each do |opt|
        html << check_box_tag("cb_#{item.id}", opt.value, selected_values.include?(opt.value)) + "#{opt.label}"
      end
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "radio"
      is_selected = false
      item.options.sort{|a,b| a.id <=> b.id }.each do |opt|
        is_selected = opt.value.downcase == item_value.value.to_s.downcase if item_value
        html << radio_button_tag("radio_#{item.id}",opt.value,is_selected) + "#{opt.label}"
      end
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "dropdown"
      selected_value = !item_value ? nil : item_value.value
      selected_value
    else
      ""
    end
  end

  def get_item_preview_pdf(item, values={})
    html = []
    values = @item_values if @item_values.present?
    item_value = values[item.id.to_s]

    if item.field_type == "label"
      item.label.present? ? "#{item.label.titleize} #{item.description}" : "#{item.field_type}"
    elsif item.field_type == "text_field"
      field_value = item_value.value if item_value
      field_value = "......." unless field_value
      "<div class='full_input_report'>#{item.label} #{field_value} #{item.description}</div> ".html_safe

    elsif item.field_type == "checkbox"
      selected_values = []
      selected_values = item_value.value.to_s.split(',') if item_value
      item.options.each do |opt|
        html << check_box_tag("cb_#{item.id}", opt.value, selected_values.include?(opt.value), :disabled => true) + "#{opt.label}"
      end
      "#{item.label}".html_safe +
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "radio"
      is_selected = false
      item.options.each do |opt|
        is_selected = opt.value.downcase == item_value.value.to_s.downcase if item_value
        html << check_box_tag("radio_#{item.id}",opt.value,is_selected,:disabled => true) + "#{opt.label}"
      end
      "#{item.label}".html_safe +
      html.join("<span class='space'></span>").html_safe

    elsif item.field_type == "dropdown"
      selected_value = !item_value ? nil : item_value.value
      select_tag("dd_#{item.id}", options_for_select(item.options.collect {|p| [ p.label, p.value ] }, selected_value))
    else
      ""
    end
  end

  def get_item_preview_site_pdf(item, values={})
    html = []
    value_html = ''
    values = @item_values if @item_values.present?
    item_value = values[item.id.to_s]
    if item.field_type == "label"
      unless item.label =~ /site information/i || item.label =~ /general information/i
        item.label.present? ? "<b>#{item.label.to_s.upcase}</b>
                               <div class='br'></div>".html_safe :
                               "#{item.field_type}"
      end
    elsif item.field_type == "text_field"
      field_value = item_value.value if item_value
      "<label class='control-label'>#{item.label}</label>
        <div class='controls'>
          <div class='full_input_report'>#{field_value} &nbsp;#{item.description}</div>
          <div class='separator'></div>
        </div>".html_safe

    elsif item.field_type == "checkbox"
      selected_values = []
      selected_values = item_value.value.to_s.split(',') if item_value
      value_html += "<label class='control-label'>#{item.label}</label>".html_safe
      value_html += "<div class='controls'>".html_safe
      item.options.each do |opt|
        html << "<div class='spacing'>"+check_box_tag("cb_#{item.id}", opt.value, selected_values.include?(opt.value), :disabled => true) + "#{opt.label}</div>"
      end
      value_html += html.join("").html_safe
      value_html +="<div class='separator'></div>".html_safe
      value_html += "</div>".html_safe
      value_html.html_safe
    elsif item.field_type == "radio"
      is_selected = false
      value_html += "<label class='control-label'>#{item.label}</label>".html_safe
      value_html += "<div class='controls'>".html_safe
      item.options.each do |opt|
        is_selected = opt.value.downcase == item_value.value.to_s.downcase if item_value
        html << "<div class='spacing'>"+check_box_tag("radio_#{item.id}",opt.value,is_selected,:disabled => true) + "#{opt.label}</div>"
      end
      value_html += html.join("").html_safe
      value_html += "<div class='separator'></div>".html_safe
      value_html += "</div>".html_safe
      value_html.html_safe
    elsif item.field_type == "dropdown"
      selected_value = !item_value ? nil : item_value.value
      value_html += "<label class='control-label'>#{item.label}</label>".html_safe
      value_html += "<div class='controls'>".html_safe
      value_html += "<div class='full_input_report'>#{selected_value}</div>".html_safe
      value_html += "<div class='separator'></div>".html_safe
      value_html += "</div>".html_safe
      value_html.html_safe
    else
      ""
    end
  end

  def get_item_preview_audit_site(item, values={})
    html = []
    value_html = ''
    values = @item_values if @item_values.present?
    item_value = values[item.id.to_s]
    if item.field_type == "label"
       item.label.present? ? "<b>#{item.label.titleize}</b>
                              <div class='br'></div>".html_safe :
                              "#{item.field_type}"
    elsif item.field_type == "text_field"
      field_value = item_value.value if item_value
      id_value = item.id
      "<label class='control-label'>#{item.label}</label>
        <div class='controls'>
          : <input type='text' name='#{id_value}' value='#{field_value}' class='full_input_report'>
          #{item.description}
          <div class='separator clearfix'></div>
        </div>".html_safe

    elsif item.field_type == "checkbox"
      selected_values = []
      id_value = item.id
      selected_values = item_value.value.to_s.split(',') if item_value
      value_html += "<label class='control-label'>#{item.label}</label>".html_safe
      value_html += "<div class='controls'>".html_safe
      item.options.sort{|a,b| a.id <=> b.id }.each do |opt|
        html << "<div class='spacing'>"+ check_box_tag("#{id_value}", opt.value, selected_values.include?(opt.value)) + "#{opt.label}</div>"
      end
      value_html += html.join("").html_safe
      value_html +="<div class='separator clearfix'></div>".html_safe
      value_html += "</div>".html_safe
      value_html.html_safe
    elsif item.field_type == "radio"
      is_selected = false
      value_html += "<label class='control-label'>#{item.label}</label>".html_safe
      value_html += "<div class='controls'>".html_safe
      item.options.sort{|a,b| a.id <=> b.id }.each do |opt|
        is_selected = opt.value.downcase == item_value.value.to_s.downcase if item_value
        id_value = item.id
        html << "<div class='spacing'>"+ radio_button_tag("#{id_value}",opt.value,is_selected) +"#{opt.label}</div>"
      end
      value_html += html.join("").html_safe
      value_html += "<div class='separator clearfix'></div>".html_safe
      value_html += "</div>".html_safe
      value_html.html_safe
    elsif item.field_type == "dropdown"
      selected_value = !item_value ? nil : item_value.value
      selected_value
    else
      ""
    end
  end

  def get_item_preview_audit_site_pdf(item, values={})
    html = []
    value_html = ''
    values = @item_values if @item_values.present?
    item_value = values[item.id.to_s]
    if item.field_type == "label"
       item.label.present? ? "<b>#{item.label.titleize}</b>
                              <div class='br'></div>".html_safe :
                              "#{item.field_type}"
    elsif item.field_type == "text_field"
      field_value = item_value.value if item_value
      id_value = item.id
      "<label class='control-label'>#{item.label}</label>
        <div class='controls'>
          : <input type='text' name='#{id_value}' value='#{field_value}' class='full_input_report'>
          #{item.description}
          <div class='separator clearfix'></div>
        </div>".html_safe

    elsif item.field_type == "checkbox"
      selected_values = []
      id_value = item.id
      selected_values = item_value.value.to_s.split(',') if item_value
      value_html += "<label class='control-label'>#{item.label}</label>".html_safe
      value_html += "<div class='controls'>".html_safe
      value_html += "<div class='wrapper-spacing'>".html_safe
      item.options.sort{|a,b| a.id <=> b.id }.each do |opt|
        html << "<div class='spacing'>"+ check_box_tag("#{id_value}", opt.value, selected_values.include?(opt.value), :disabled => true) + "#{opt.label}</div>"
      end
      value_html += html.join("").html_safe
      value_html +="<div class='separator clearfix'></div>".html_safe
      value_html += "</div>".html_safe
      value_html += "</div>".html_safe
      value_html.html_safe
    elsif item.field_type == "radio"
      is_selected = false
      value_html += "<label class='control-label'>#{item.label}</label>".html_safe
      value_html += "<div class='controls'>".html_safe
      value_html += "<div class='wrapper-spacing'>".html_safe
      item.options.sort{|a,b| a.id <=> b.id }.each do |opt|
        is_selected = opt.value.downcase == item_value.value.to_s.downcase if item_value
        id_value = item.id
        html << "<div class='spacing'>"+ radio_button_tag("#{id_value}",opt.value,is_selected, :disabled => true) +"#{opt.label}</div>"
      end
      value_html += html.join("").html_safe
      value_html += "<div class='separator clearfix'></div>".html_safe
      value_html += "</div>".html_safe
      value_html += "</div>".html_safe
      value_html.html_safe
    elsif item.field_type == "dropdown"
      selected_value = !item_value ? nil : item_value.value
      selected_value
    else
      ""
    end
  end

  def pairkey
    params[:cell_id]
  end

  def page_entries_info(collection, pagination_object)
    offset = (pagination_object.current - 1) * pagination_object.limit
    offset_limit = offset + collection.size
    content = '<div class="pagination">Showing  '+
      if offset_limit < pagination_object.records
        "<b>#{offset+1}</b> - <b>#{offset_limit}</b> of <b>#{pagination_object.records}</b>"
      else
        "<b>#{collection.size}</b>"
      end + ' items </div>'
    content.html_safe
  end

  def generate_link_status(value='', cond='', link='', opt={})
    return '0' if value.nil?
    value.send(cond) ? value : link_to(value, link, opt)
  end

  def cek_data_present(data, value_true, value_false)
    data.present? ? value_true : value_false
  end

  def stats_sum(key, value)
    @stats_sum ||= {}
    @stats_sum[key] ||= 0
    @stats_sum[key] += value.to_i
  end

  def get_stats_sum
    @stats_sum ||= {}
  end

end

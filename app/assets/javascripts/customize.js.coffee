generate_finger_print = ->
  String new Date().getTime()
$(document).ready ->
  $('.service-point-select, .site-select').multiselect
    includeSelectAllOption: true
    enableFiltering: true
    enableCaseInsensitiveFiltering: true

  $('select[name="user[service_point_ids][]"]').on 'change', ->
    if $(this).val()
      $.get($(this).data('site-url') + '?site_ids=' + $(this).val().join(','))

  $('[name="user[role_id]"]').on 'change', ->
    $.get($(this).data('superior-url') + '?role_id=' + $(this).val())

  $('.reschedule-approval').scrollToFixed()
  new_form = (open_tag, html, close_tag) ->
    rgx_id = new RegExp("_(\\d{1,})_", "g")
    rgx_name = new RegExp("\\[(\\d{1,})\\]", "g")
    finger_print = generate_finger_print()
    html = open_tag + html.replace(rgx_id, "_" + finger_print + "_").replace(rgx_name, "[" + finger_print + "]").replace(" selected=\"selected\"", "").replace(" checked=\"checked\"", "") + close_tag
    html
  remove_block = ->
    block = $(this).closest(".block-container")
    el_id = block.find(".deleteable-field")
    if el_id.length
      confirmation = confirm("Your item will be deleted, please confirm before continue?")
      if confirmation
        block.hide()
        clone_el_id = el_id.clone()
        clone_el_id.attr "id", clone_el_id.attr("id").replace("_id", "__destroy")
        clone_el_id.attr "name", clone_el_id.attr("name").replace("[id]", "[_destroy]")
        clone_el_id.val 1
        el_id.parent().append clone_el_id
    else
      block.remove()
    false

  role_form = undefined
  role_form = $(".block-container").last().clone()  if $(".block-container").length and not role_form
  $("#add_more a").on "click", ->
    html = new_form("<div class=\"block-container\">", role_form.html(), "</div>")
    $(".add_block").append html
    last_update = $(".add_block").children().last()
    last_update.find(".deleteable-field").remove()
    last_update.find(".bootstrap-select, .select2-container").remove()
    last_update.find("select").show()
    last_update.find('select:not(.selectpicker,.uniformjs,.import-schema-fieldsm,.service-point-select)').select2()
    last_update.find("a.remove_block").on "click", remove_block
    false

  $("a.remove_block").on "click", remove_block
  $("a.remove_column").on "click", ->
    th = $(this).parents("th")
    identifier = th.attr("class")
    $("td[class*=\"" + identifier + "\"]").hide()
    th.hide()
    th.find(".destroyable").val 1
    $("td[class*=\"" + identifier + "\"]").find(".destroyable").val 1
    false

  $("a.remove_item").on "click", ->
    div = $(this).closest("div")
    _destroyable = div.find(".destroyable")
    if _destroyable.length
      div.hide()
      _destroyable.val 1
    else
      div.remove()
    false

  $("a.js_remove_items").on "click", ->
    div = $(this).closest("div#table_item")
    div.hide()
    div.find(".destroyable").val 1
    false

  $("a.edit_item").on "click", ->
    myType = new Array()
    myType["label_only"] = "Label"
    myType["checkbox"] = "Checkbox"
    myType["radio"] = "Radio"
    myType["text_field"] = "Text Field"
    myType["dropdown"] = "Dropdown"
    _parent = $(this).parents("div[data-id*=\"item_\"]")
    _type_form = _parent.find("input[name*=\"[field_type]\"]")
    _edit_container = "<div class=\"well hide\">" + "<div class=\"row-fluid\">" + "<div class=\"span12\">" + "<div class=\"pull-left\">" + "<h4>Edit Field Setting</h4>" + "</div>" + "</div>" + "<div class=\"span12 content-container\">" + "<div class=\"control-group\">" + "{{LABEL}}" + "<label class=\"control-label\">" + myType[_type_form.val()] + "</label>" + "<div class=\"controls\">" + "{{CONTENT}}" + "</div>" + "<button id=\"edit_setting_save\" class=\"btn btn-icon btn-primary glyphicons circle_ok btn-add-field\"><i></i>Edit Field</button>" + "</div>" + "</div>" + "</div>" + "</div>"
    _controls = _parent.find(".js_controls")
    if _controls.length
      _input_label = _parent.find("input[type=\"hidden\"][name*=\"[label]\"]").first()
      _label = "<div class=\"controls\">" + "<label class=\"control-label\">" + "Label" + "</label>" + "</div>"
      _contents = ""
      $.each _controls, (index, el) ->
        _hidden_div = el.attributes.style.value.match("display: none")
        if _hidden_div?
          _contents
        else
          _contents = _contents + "<div class=\"span12 line-item\" style=\"margin-left:0px;margin-bottom: 5px;\">" + $(el).html() + "</div>"
        if index is (_controls.length - 1)
          $(".block-container").html _edit_container.replace(/{{LABEL}}/g, _label).replace(/{{CONTENT}}/g, _contents)
          $(".block-container").find(".content-container").find("span, input[type=radio], input[type=text], select, input[type=checkbox], a").remove()
          $(".block-container div.line-item").append "<a href=\"\" class=\"close remove_option pull-right\" style=\"margin-right:30px\">&times;</a>"
          $(".block-container div.line-item:last").after "<div><br/><a href=\"\" id=\"edit_setting_add\" class=\"add-more-line\">Add More</a></div>"
          _hidden_fields = $(".block-container .content-container").find("input[name*=\"[label]\"], input[name*=\"[value]\"]")
          $.each _hidden_fields, (i, item) ->
            _text_field = $("<input type='text' />").attr(
              name: $(item).attr("name")
              value: $(item).val()
              id: $(item).attr("id")
            )
            $(item).after _text_field
            $(item, "a").remove()
            $(".block-container .well").show()  if i is (_hidden_fields.length - 1)


    else
      _contents = "<div class=\"span12 line-item\" style=\"margin-left:0px;margin-bottom: 5px;\">" + _parent.html() + "</div>"
      $(".block-container").html _edit_container.replace(/{{CONTENT}}/g, _contents)
      $(".block-container").find(".content-container").find(".controls").find("span, input[type=radio], input[type=text], select, input[type=checkbox], a, label").remove()
      $(".block-container div.line-item").append "<a href=\"\" class=\"close remove_option pull-right\" style=\"margin-right:30px\">&times;</a>"
      _hidden_fields = $(".block-container .content-container").find("input[name*=\"[label]\"], input[name*=\"[value]\"], input[name*=\"[description]\"]")
      $.each _hidden_fields, (i, item) ->
        _text_field = $("<input type='text' />").attr(
          name: $(item).attr("name")
          value: $(item).val()
          id: $(item).attr("id")
        )
        $(item).after _text_field
        $(item).remove()
        $(".block-container .well").show()  if i is (_hidden_fields.length - 1)

    
    #add field
    $("a#edit_setting_add").on "click", ->
      _clone_input = $(".block-container .well").find("div.span12.line-item:last")
      _cloned_input = _clone_input.clone(true).insertAfter(_clone_input)
      _cloned_label = _cloned_input.find("input[name$=\"[label]\"]")
      _cloned_value = _cloned_input.find("input[name$=\"[value]\"]")
      _cloned_id = _cloned_input.find("input[name$=\"[id]\"]")
      _cloned_destroy = _cloned_input.find("input[name$=\"[_destroy]\"]")
      _attr_name = _cloned_label.attr("name").substring(-10, $(_cloned_label).attr("name").indexOf("[options_attributes]["))
      _io = new Date().getTime()
      
      #remove id and destroy
      _cloned_id.remove()
      _cloned_destroy.remove()
      
      #add placeholder attr
      _cloned_label.attr("placeholder", "enter your label").val ""
      _cloned_value.attr("placeholder", "enter your value").val ""
      
      #change name attr
      _cloned_label.attr "name", _attr_name + "[options_attributes][" + _io + "][label]"
      _cloned_value.attr "name", _attr_name + "[options_attributes][" + _io + "][value]"
      false

    
    #edit setting
    $("#edit_setting_save").on "click", ->
      _block = $(".block-container .well").find("div.span12.line-item")
      _block_table = _parent.find("div.js_controls")
      $.each _block, (i, itm) ->
        _value_block = $(itm).find("input[name*=\"[value]\"]")
        _label_block = $(itm).find("input[name*=\"[label]\"]")
        _desc_block = $(itm).find("input[name*=\"[description]\"]")
        _div_table = _parent.find("input[name=\"" + _label_block.attr("name") + "\"]").closest("div")
        if _div_table.find("input[name=\"" + _label_block.attr("name") + "\"]").length
          _div_table.find("input[name=\"" + _label_block.attr("name") + "\"]").val _label_block.val()
          _div_table.find("input[name=\"" + _value_block.attr("name") + "\"]").val _value_block.val()
          _div_table.find("input[name=\"" + _desc_block.attr("name") + "\"]").val _desc_block.val()
          _div_table.find("span").html _label_block.val()
          _div_table.find("span.js_desc").html _desc_block.val()
          _div_table.find("label").html _label_block.val()
          if _div_table.hasClass("js_dropdown")
            option_dropdown = _div_table.closest(".control-group").find("#js_dropdown_" + i)
            option_dropdown.html _label_block.val()
            option_dropdown.val _value_block.val()
        else
          _clone_div = _parent.find("div.js_controls:last")
          _cloned_div = _clone_div.clone(true).insertAfter(_clone_div)
          _cloned_label = _cloned_div.find("input[name$=\"[label]\"]")
          _cloned_value = _cloned_div.find("input[name$=\"[value]\"]")
          _cloned_id = _cloned_div.find("input[name$=\"[id]\"]")
          _cloned_destroy = _cloned_div.find("input[name$=\"[_destroy]\"]")
          _cloned_label.attr("name", _label_block.attr("name")).val _label_block.val()
          _cloned_value.attr("name", _value_block.attr("name")).val _value_block.val()
          
          #remove id and destroy
          _cloned_id.remove()
          _cloned_destroy.remove()
          
          #
          _cloned_div.find("span").html _label_block.val()
          _cloned_div.find("label").html _label_block.val()
          if _cloned_div.hasClass("js_dropdown")
            _select_dropdown = _cloned_div.closest(".control-group").find("select")
            _select_dropdown = _select_dropdown.append("<option></option>")
            _option_dropdown = _select_dropdown.find("option:last")
            _option_dropdown.html _label_block.val()
            _option_dropdown.val _value_block.val()
          _cloned_div.show()

      $(".block-container").html ""
      false

    
    #remove option
    $("a.close.remove_option").on "click", ->
      _block = $(this).parent("div.span12.line-item")
      _parent_block = _block.parent()
      _block.remove()
      unless _parent_block.find("div.span12.line-item").length
        _parent_block.parent().find("label").remove()
        _parent_block.remove()
        _parent.find(".destroyable").val 1
        _parent.hide()
      else
        _label_block = _block.find("input[name*=\"[label]\"]")
        _div_table = _parent.find("input[name=\"" + _label_block.attr("name") + "\"]").closest("div")
        _destroyable = _div_table.find(".destroyable")
        if _destroyable.length
          _destroyable.val 1
          _div_table.hide()
        else
          _div_table.remove()
      false

    false

  $("#form").tableDnD
    onDrop: (table, row) ->

    
    # alert($('#form').tableDnDSerialize());
    dragHandle: ".dragHandle"

  $("#js-table-item").tableDnD
    onDrop: (table, row) ->

    
    # alert($('#js-table-item').tableDnDSerialize());
    dragHandle: ".dragHandle"

  $("#work_form_groups").tableDnD onDrop: (table, row) ->
    $.ajax
      type: "POST"
      url: "<%= url_for(:action => 'sort') %>"
      processData: false
      data: $.tableDnD.serialize() + "&authenticity_token=" + encodeURIComponent("<%= form_authenticity_token if protect_against_forgery? %>")
      success: (msg) ->
        alert "The specifications have been updated"


  isTable = ->
    finger_print = generate_finger_print()
    table_input = "<div class=\"control-group\">" + "<label class=\"control-label\">Table Form</label>" + "<div class=\"controls\">" + "<input class=\"span12\" id=\"work_form_group_columns_attributes__column_names\" name=\"work_form_group[column_names]\" size=\"30\" type=\"text\">" + "</div></div>"
    if $("#work_form_group_is_table").val() is "1" and $("#table_item").html() is `undefined`
      $(".block-container").find("div.well").remove()
      $(".form-group-container").append table_input
      $("#work_form_group_columns_attributes__column_names").tagsInput
        width: "auto"
        defaultText: "Add Column"
        height: "35px"

    else if $("#work_form_group_is_table").val() is "0"
      $(".form-group-container").find("#work_form_group_columns_attributes__column_names").parents(".control-group").remove()
      data_url = $(this).parents("div.controls").attr("data-url")
      $.get data_url + ".js?fieldset=1"

  $("#work_form_group_is_table").change isTable
  $(document).ready isTable
  $("a.add-more-line").on "click", ->
    _clone_input = $(this).closest("div.control-group").find("div.controls:last")
    _cloned_input = _clone_input.clone(true).insertAfter(_clone_input)
    _cloned_label = _cloned_input.find("input[name$=\"[label]\"]")
    _cloned_value = _cloned_input.find("input[name$=\"[value]\"]")
    _cloned_id = _cloned_input.find("input[name$=\"[id]\"]")
    _cloned_destroy = _cloned_input.find("input[name$=\"[_destroy]\"]")
    _io = new Date().getTime()
    
    #remove id and destroy
    _cloned_id.remove()
    _cloned_destroy.remove()
    
    #add placeholder attr
    _cloned_label.attr("placeholder", "enter your label").val ""
    _cloned_value.attr("placeholder", "enter your value").val ""
    
    #change name attr
    _cloned_label.attr "name", "work_form_group[items_attributes][0][options_attributes][" + _io + "][label]"
    _cloned_value.attr "name", "work_form_group[items_attributes][0][options_attributes][" + _io + "][value]"
    false

  $("a.remove-row").on "click", ->
    _tr_block = $(this).closest("tr")
    $(_tr_block).find(".destroyable").val 1
    $(_tr_block).hide()
    false

  $("a.add-field-column").on "click", ->
    data_url = $(this).parents("table").attr("data-url")
    column_identifier = $(this).parents("td").attr("class")
    column_index = $(this).parents("td").attr("data-index")
    row_index = $(this).parents("tr").attr("data-index")
    $.get data_url + ".js?column=" + column_identifier + "&index=" + column_index + "&index_row=" + row_index
    false

  $("a#add_field_row").on "click", ->
    _last_tr = $(this).parent(".span12").find("table").find("tr").last()
    _cloned_tr = _last_tr.clone()
    _new_index = parseInt(_last_tr.attr("data-index")) + 1
    finger_print = generate_finger_print()
    _last_tr.after _cloned_tr
    _th_present = _cloned_tr.find("th").length
    if _th_present
      _tbody = $(this).parent(".span12").find("table").find("tbody")
      _cloned_tr.attr "data-index", finger_print
      _tbody.prepend _cloned_tr
      _cloned_tr.find("input[type=text], input[type=hidden], a").remove()
      _cloned_td = _cloned_tr.find("th")
      $.each _cloned_td, (i_th, th) ->
        $(th).html "<a href=\"#\" class=\"add-field-column\" data-id=\"" + finger_print + "\">add field</a>"
        $(th).prepend "<input type=\"hidden\" name=\"work_form_group[rows_attributes][" + finger_print + "]" + "[row_columns_attributes][" + (finger_print + i_th) + "][column_id]\" value=\"" + $(th).data("id") + "\">"
        $(th).replaceWith "<td class=\"" + $(th).attr("class") + "\" data-index=\"" + (finger_print + i_th) + "\"" + "data-id=\"" + $(th).data("id") + "\">" + $(th).html() + "</th>"

    else
      _cloned_tr.attr "data-index", finger_print
      _cloned_tr.find("div.js_controls, div.control-group, div.border-group, span, input[type=radio], input[type=text], " + "input[type=hidden],select, input[type=checkbox], label").remove()
      _td_field = _cloned_tr.find("td")
      $.each _td_field, (i, td_itm) ->
        column_name = $(td_itm).find("a.add-field-column").data("type")
        $(td_itm).prepend "<input type=\"hidden\" name=\"work_form_group[rows_attributes][" + finger_print + "]" + "[row_columns_attributes][" + (finger_print + i) + "][column_id]\" value=\"" + $(td_itm).data("id") + "\">"
        $(td_itm).replaceWith "<td class=\"" + $(td_itm).attr("class") + "\" data-index=\"" + (finger_print + i) + "\"" + "data-id=\"" + $(td_itm).data("id") + "\">" + $(td_itm).html() + "</th>"

    $("a.add-field-column").on "click", ->
      table_container = $(this).parents(".table-survey")
      field_setting_url = $(this).attr("href")
      row_container = $(this).parents(".row-container")
      row_container.attr "data-id", generate_finger_print()  unless row_container.attr("data-id").length
      false

    $("a.remove-row").on "click", ->
      _tr_block = $(this).closest("tr")
      $(_tr_block).remove()
      false

    false

  # $("a.btn-add-survey").on "click", ->
  #   $.get $(this).attr("href")
  #   false

  $('.btn-add-field').on 'click', ->
    $.get($(this).attr('href'))
    false

  $(".tbody_survey a").on "click", ->
    $('html, body').animate({
        scrollTop: $(".survey-item-setting td").offset().top
    }, 100);
    false

  $(".btn-new-row").on "click", ->
    $.get($(this).attr('href'));
    false

  if $(".survey-container-inner").length
    $(".survey-container-inner").mCustomScrollbar({
      horizontalScroll: true,
      mouseWheel:false,
      scrollButtons:{
        enable:true
      },
      theme:"dark-thin"
    });

# Select All
  $("#select_all.select_all").on "click", ->
    $('table.table').find('tbody tr').addClass('active_row')
    $(this).addClass('hide')
    $(this).closest('div').find('.deselect_all').removeClass('hide')
    $('table.table').find('input[type="checkbox"]').attr('checked','checked')
    $('table.table').find('.action').removeClass('hide')
    false

  $(".gradeX").hover (->
    $(this).addClass('active_row')
    $(this).find('.action').removeClass('hide') 
  ), ->
      $(this).removeClass('active_row')
      $(this).find('.action').addClass('hide')

  $("input[type='checkbox']").on "click", ->
    if $(this).parents('tr').hasClass('active_row')
      $(this).parents('tr').removeClass('active_row')
      $(this).parents('tr').find('.action').addClass('hide')
    else
      $(this).parents('tr').addClass('active_row')
      $(this).parents('tr').find('.action').removeClass('hide')

  $("#deselect_all.deselect_all").on "click", ->
    $('table.table').find('tbody tr').removeClass('active_row')
    $(this).addClass('hide')
    $(this).closest('div').find('.select_all').removeClass('hide')
    $('table.table').find('input[type="checkbox"]').removeAttr('checked');
    $('table.table').find('.action').addClass('hide')
    false

  $('.import-all-fields').on "click", -> 
    $('.import-schema-fields').multiSelect('select_all')
    false

  $('.unimport-all-fields').on "click", ->
    $('.import-schema-fields').multiSelect('deselect_all')
    false

  stopDragSelection = (e, ui) ->
    $(".sortable-schema").val ""
    tmp_result = []
    $.map $(".ms-selection li.ms-selected"), (a) ->
      tmp_value = $(a).attr("id").replace(/-selection/i, "")
      if String(tmp_value).length && tmp_result.indexOf tmp_value > -1
        tmp_result.push tmp_value
        $(".sortable-schema").val tmp_result.join(',')

  if $(".import-schema-fields").length
    left_header_title = 'Available Headers'
    right_header_title = 'Selected Header'
    if $(".import-schema-fields").data('left-title')
      left_header_title = $(".import-schema-fields").data('left-title')
    if $(".import-schema-fields").data('right-title')
      right_header_title = $(".import-schema-fields").data('right-title')
    $(".import-schema-fields").multiSelect
      selectableHeader: '<div class="custom-header">'+left_header_title+'</div>'
      selectionHeader: '<div class="custom-header">'+right_header_title+'</div>'
      dblClick: true
      afterSelect: (value, text) ->
        stopDragSelection null, null

      afterDeselect: (value, text) ->
        required_import = JSON.parse($(".import-schema-fields").attr("data-required-fields"))
        value = value[0]  if value.constructor is Array
        if $.inArray(value, required_import) > -1
          alert "You should not delete, " + value + ", it is required!"
          return false
        stopDragSelection null, null
  
  $(".ms-selection .ms-list").sortable
    stop: stopDragSelection


  $("button[type='submit'].btn-white").on "click", ->
    if $('input[type="checkbox"]:checked').length < 1 
      false

  $('.table-form-survey').fixedHeaderTable
    footer: true,
    cloneHeadToFoot: true,
    altClass: 'odd',
    autoShow: true,
    fixedColumn: false

  $ ->
    $(".datetimepicker").datetimepicker pickSeconds: false

  $ ->
  $("#slider-range-min").slider
    range: "min"
    value: ''
    min: ''
    max: 100
    slide: (event, ui) ->
      $("#amount").val "" + ui.value
  $("#amount").val "" + $("#slider-range-min").slider("value")

  $(window).ready ->
    $(".sortable-schema").val("")
    $.map($(".ms-selection li.ms-selected"), (e) ->
      tmp_result = $(".sortable-schema").val() + "," + $(e).attr("id").replace(/-selection/i, "")
      $(".sortable-schema").val(tmp_result.replace(/^\,|\,$/g, ""))
      $(".sortable-schema").val(tmp_result.replace(/^\,|\,$/g, ""))
    )

  $(".import-all-fields").click ->
    $(".sortable-schema").val("")
    $.map($(".ms-selection li.ms-selected"), (e) ->
      tmp_result = $(".sortable-schema").val() + "," + $(e).attr("id").replace(/-selection/i, "")
      $(".sortable-schema").val(tmp_result.replace(/^\,|\,$/g, ""))
      $(".sortable-schema").val(tmp_result.replace(/^\,|\,$/g, ""))
    )

  $(".unimport-all-fields").click ->
    $(".sortable-schema").val ""

  if $("#operator_name").length
    $("#schedule_site_id").change ->
      $.ajax
        url: "/sites/" + $(this).val() + "/get_operator"
        type: "GET"

        success: (data) ->
          $("#operator_name").removeClass 'hide'
          $("#operator_name .controls").html data

  if(".popup-clone").length
    $(".popup-clone").click ->
      $('#modal-popup-clone').modal('show')
      $("#modal-popup-clone").find("form").attr "action", $(this).data("link")
      false

  if(".import_error_alert").length
    $(".import_error_alert").click ->
      $('#modal-import-alert').modal('show')
      $("#modal-import-alert").find(".modal-body").html $(this).data("value")
      false
  if $(".thead_survey th a").length
    $(".thead_survey th a").editable()

  $('[name="schedule[work_type_id]"]').on 'change', ->
    $.ajax
      url: $(this).data('url') + '?type_id=' + $(this).val() + '&selected_id=' + ($(this).data('form-id')||'')
      type: "GET"

  $('[name="schedule[form_id]"]').on 'change', ->
    $.ajax
      url: $(this).data('url') + '?form_id=' + $(this).val()
      type: "GET"



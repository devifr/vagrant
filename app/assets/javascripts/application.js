// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//= require theme/scripts/jquery-1.8.2.min
//= require jquery_ujs
//= require cocoon
//= require theme/scripts/modernizr.custom.76094
//= require theme/scripts/less-1.3.3.min

//= require theme/scripts/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.min
//= require theme/scripts/jquery-ui-touch-punch/jquery.ui.touch-punch.min
//= require theme/scripts/jquery-miniColors/jquery.miniColors
//= require theme/scripts/select2/select2
//= require primary
//= require theme/scripts/jquery.cookie
//= require theme/scripts/themer
//= require theme/scripts/notyfy/jquery.notyfy
//= require jsapi
//= require theme/scripts/jquery.sparkline
//= require sparklines
//= require jquery.tagsinput.min

//= require jquery.mCustomScrollbar.concat.min
//= require jquery.fixedheadertable.min

//= require theme/scripts/jquery.ba-resize
//= require theme/scripts/pixelmatrix-uniform/jquery.uniform.min
//= require theme/scripts/DataTables/media/js/jquery.dataTables.min
//= require theme/scripts/DataTables/media/js/DT_bootstrap
//= require bootstrap/js/bootstrap.min
//= require bootstrap/extend/bootstrap-datetime/bootstrap-datetimepicker

//= require bootstrap/extend/bootstrap-select/bootstrap-select
//= require bootstrap/extend/bootstrap-toggle-buttons/static/js/jquery.toggle.buttons
//= require bootstrap/extend/bootstrap-hover-dropdown/twitter-bootstrap-hover-dropdown.min
//= require bootstrap/extend/jasny-bootstrap/js/jasny-bootstrap.min
//= require bootstrap/extend/jasny-bootstrap/js/bootstrap-fileupload
//= require bootstrap/extend/bootbox
//= require bootstrap/extend/bootstrap-wysihtml5/js/wysihtml5-0.3.0_rc2.min
//= require bootstrap/extend/bootstrap-wysihtml5/js/bootstrap-wysihtml5-0.0.2
//= require theme/scripts/bootstrap-editable
//= require bootstrap-editable-rails
//= require bootstrap/js/bootstrap-multiselect
//= require bootstrap/js/bootstrap2-multiselect
//= require bootstrap/bootstrap-switch
//= require jquery-scrolltofixed-min
//= require dnd/jquery.tablednd
//= require jquery.quicksearch

//= require theme/scripts/fullcalendar/fullcalendar/fullcalendar

//= require customize_calender

//= require theme/scripts/flot/jquery.flot
//= require theme/scripts/flot/jquery.flot.pie
//= require theme/scripts/flot/jquery.flot.tooltip.min
//= require theme/scripts/flot/jquery.flot.selection
//= require theme/scripts/flot/jquery.flot.resize
//= require theme/scripts/flot/jquery.flot.orderBars

//= require highcharts
//= require jqplot/jquery.jqplot.min
//= require jqplot/jqplot.meterGaugeRenderer.min

//= require customize_chart

//= require customize_map
//= require cycle_progress/easypiechart
//= require customize_progress

//= require bootstrap/js/bootstrap-modal
//= require bootstrap/js/bootstrap-modalmanager

//= require theme/scripts/load
//= require ckeditor/init
//= require customize
//= require customize_grafik

$(document).ready(function(){
  $(".show-approval").click(function(){
    site_name = $(this).data('sitename');
    operator_name = $(this).data('operatorname');
    date = $(this).data('date');
    url = $(this).data('url');
    $('#approval').find('.form_approval').attr('action', url);
    $('#approval').find('.sitename b').html(site_name);
    $('#approval').find('.operator b').html(operator_name+'  '+date);
    $('#approval').modal('show');
    CKEDITOR.replace('note')
    return false;
  });

  $(".show-note").click(function(){
    $("#note-modal").find('.notes').html($(this).data('value'));
    $("#note-modal").modal('show');
    return false;
  })
})


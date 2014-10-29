<% @finger_print = (Time.now.to_i * rand()).to_i %>
if($('.survey-container').children().length){
  location.reload();
}else{
  $('.survey-container').append("<%= escape_javascript(render('work_form_columns/add_column')) %>");
}

$('.survey-container .tbody_survey td[data-id="<%= @finger_print %>"]').
  find('.btn-add-field').on('click', function(){
    $.get($(this).attr('href'))
    return false;
  })
$(".thead_survey th a").editable();
    /* initialize the external events
    -----------------------------------------------------------------*/
  
    $('#external-events ul li').each(function() 
    {
    
      // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
      // it doesn't need to have a start or end
      var eventObject = {
        title: $.trim($(this).text()) // use the element's text as the event title
      };
      
      // store the Event Object in the DOM element so we can get to it later
      $(this).data('eventObject', eventObject);
      
      // make the event draggable using jQuery UI
      
    });
  
    /* initialize the calendar
    -----------------------------------------------------------------*/
    
$(document).ready(function(){
if($('#calendar').length){

  window.calOption = {
    getLocalOffset : function(){
      return (new Date()).getTimezoneOffset() * 60;
    },
    getOriginalTime : function(time_integer){
      if(time_integer.constructor == Date){
        return time_integer;
      }else{
        var convertedTime = time_integer + window.calOption.getLocalOffset();
        return (new Date(convertedTime * 1000))
      }
      
    },
    dateToString: function(date){
      return date.getDate() +'-'+ (date.getMonth()+1) +'-'+ date.getFullYear()
    },
    getURL: function(startDate,endDate){
      var eventURL = $('#calendar').data('url') + "?start_on=" + startDate + "&end_on=" + endDate;
      return eventURL;
    }
  }

  window.calendar = $('#calendar').fullCalendar({
      contentHeight: 1024,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events: function(start, end, callback) {
        var view     = $('#calendar').fullCalendar('getView');
        start_time   = calOption.getOriginalTime(view.start);
        end_time     = calOption.getOriginalTime(view.end);
        event_ids    = []
        event_titles = []
        event_dates  = []
        start_date   = calOption.dateToString(start_time)
        end_date     = calOption.dateToString(end_time)

        $.ajax({
          url: calOption.getURL(start_date, end_date),
          dataType: 'json',
        }).always(function(){
          $('.loading-calendar').hide();
        }).done(function(doc) {
          var events    = [];
          var title_arr = [];
          var start_before;

          $(doc).each(function(i, item) {
            var eventDate = calOption.getOriginalTime(item.start);
            var eventNode = calOption.dateToString(eventDate);
              
            if(start_before != eventNode){
              event_ids[eventNode]    = []
              event_titles[eventNode] = []
              event_dates[eventNode]  = []
              title_arr = [];
            }

            event_ids[eventNode].push(item.id);
            event_titles[eventNode].push(item.title);
            event_dates[eventNode].push(calOption.getOriginalTime(item.start));
            
            title_arr.push(item.title);
            start_before = eventNode;

            if (title_arr.length < 3){
              item.description = eventNode;
              item.title = '<a href="/schedules/'+ item.id + '">' + item.title + '</a>';
              events.push(item);
            }

            if(i == (doc.length-1)){
              callback(events); 
            }
          });
        });
    },
    
    eventRender: function(event, element, view){
      if(event.start.getMonth() !== view.start.getMonth()){return false}
    },

    eventAfterRender: function(event, element) {
      var m_names = new Array("January", "February", "March", 
                    "April", "May", "June", "July", "August", "September", 
                    "October", "November", "December");
      var date = event.description;
      var hour = '';
      var before_hour = '';
      var suffix_hour = '';
      var site  = [];
      var hours = [];
      var content_popup = '';

      if (event_titles[date].length > 2 ){
        $.each(event_titles[date], function( i, el ) {
            hour = event_dates[date][i].getHours();
            suffix_hour = 'am';

            if(hour > 12){
              hour = (hour - 12);
              suffix_hour = 'pm'; 
            }
            time_hour = hour + '' + suffix_hour;

            if(before_hour != time_hour){
              site[time_hour] = [];
              hours.push(time_hour);
            }

            site[time_hour].push('<li><a href="/schedules/'+event_ids[date][i] + '">' + el + '</a></li>');
            before_hour = time_hour;

            if(i == (event_titles[date].length - 1)){
              $.each(hours, function( i_hour, el_hour ) {
                content_popup += '<tr>'
                content_popup += '<td>' + el_hour + '</td>';
                content_popup += '<td class="site-td"> <ul>' + site[el_hour].join('') + '</ul></td>';
                content_popup += '</tr>';

                if(i_hour == (hours.length-1)){
                  // hide week 5 and change to fc-last to week 4
                  if($('#calendar').find('.fc-week5').find('.fc-other-month').length > 6){
                    $('#calendar').find('.fc-week5').hide();
                    $('#calendar').find('.fc-week4').addClass('fc-last');
                  }else{
                    $('#calendar').find('.fc-week5').show();
                  }

                  if($("#float_calendar-"+event.description).length){
                     $("#float_calendar-"+event.description).remove();
                  }
                  element.find('.fc-event-title').after("<div id='float_calendar-"+event.description+"'>" +
                   "<button class='btn-calender'>"+ (event_titles[date].length - 2) + " More</button></div>");
                  element.find('.fc-event-inner .btn-calender').on('click', function(){
                    var date_popup = event.start.getDate() + ' ' + m_names[event.start.getMonth()] + ' ' + event.start.getFullYear();
                    var $modal = $('#calendar-modal');
                    $modal.find('.modal-title').html(date_popup);
                    $modal.find('.task-popup').html('SITE <span class="count-site">' + event_titles[date].length + '</span>');
                    $modal.find('tbody').html(content_popup);
                    $modal.modal('show');
                    return false;
                  });
                }
              });
            }
        });
      }

    } 
  });

  function hideWeek(){
    if($('#calendar').find('.fc-week5').find('.fc-other-month').length > 6){
      $('#calendar').find('.fc-week5').hide();
      $('#calendar').find('.fc-week4').addClass('fc-last');
    }else{
      $('#calendar').find('.fc-week5').show();
    }
  }
// // add sort by in calender
//   $('.fc-header-right').prepend('<p class="pull-left" style="margin-top:10px">Sort By:&nbsp;&nbsp;</p> ');
// // // add pull-left
//    $('.fc-header-right').find('.btn-group').addClass('pull-left')
// // add class pull-left-calender 
//    $('.fc-header-left').addClass('pull-left-calender')
// hide week 5 and change to fc-last to week 4
  $('.fc-button-next').on('click',function(){
    hideWeek();
  });
  
  $('.fc-button-prev').on('click',function(){
    hideWeek();
  });
// //add style table header  
  $('#calendar').find('table.fc-header').addClass('form-actions').attr('style','background-color:#f3f7f9');
  $('#calendar').find('table.fc-header').after('<div class="add-margin-top"></div>');
}
});
$(document).ready(function(){
  if(!window.statsProgress){
    window.statsProgress = {
      init: function(){
        if($('.progress-container').length){
          statsProgress.loadData();
        }
      },
      loadData: function(){
        $.ajax({
          url: '/dashboard/progress.js',
          dataType: 'script'
        }).always(function(){
          $('.progress-loading').hide();
        })
      },

      renderHtml: function(html){
        $('.progress-container').html(html);
        $('.pie-chart').easyPieChart({ 
          animate:false, 
          size:'150', 
          trackColor:'#506774', 
          barColor:'#60d54a', 
          scaleColor:false, 
          lineWidth:10, 
          lineCap:'butt' 
        })
        statsProgress.buildPagination();
      },

      buildPagination: function(){
        var limit = 6;
        var limit_page = 6;
        var count_site = $('#site_chart').data('count');
        var section_site = 1
        var modulus_site = count_site % limit;
        var hide_class = ""
        if(limit < count_site){
          section_site = count_site / limit;
          var total_modulus_site = (parseInt(section_site) * limit) + modulus_site;
          if((modulus_site > 0) && (total_modulus_site == count_site)){
            section_site = section_site + 1;
          }
        }
        if($('.prog_bar').length){
            
          $('#paginate-survey').prepend('<ul>');
          $('#paginate-survey').find('ul').append('<li><a href="" class="paginate first-li hide" data-value="1">First</a></li>');
          for (var i = 1; i <= section_site; i++) {

            if (i > limit_page) {
              hide_class = 'hide';
            };

            $('#paginate-survey').find('ul').append('<li><a href="" class="paginate '+hide_class+'" data-value="'+i+'">'+i+'</a></li>');
          };
          $('#paginate-survey').find('ul').append('<li><a href="" class="paginate last-li hide" data-value="'+section_site+'">Last</a></li>');
          $('#paginate-survey').append('</ul>');

        }
        $('.prog_bar').removeClass('hide');
        $('.prog_bar').addClass('hide');
        $.each($('.prog_bar'), function( i, el ) {
          if ((i+1) <= limit) {
            $(el).removeClass('hide');
          };
        })

        $('#all-progress').on('click',function(){
          $('.prog_bar').removeClass('hide');
          return false;
        })

        $("#paginate-survey").find(".paginate").on('click', function(){
          var old_limit = limit * (parseInt($(this).data('value')) - 1);
          limit = limit * parseInt($(this).data('value'));
          $('.paginate').removeClass('active');
          $(this).addClass('active');
          $('.prog_bar').removeClass('hide');
          $('.prog_bar').addClass('hide');
          $.each($('.prog_bar'), function( i, el ) {
            if ((i+1) > old_limit) {
              if ((i+1) <= limit ) {
                $(el).removeClass('hide');
              };
              // $(el).addClass('hide');
            };
          })
          limit = 6;
          statsProgress.rehashPagination(parseInt($(this).data('value')));
          return false;
        });
      },

      rehashPagination: function(page){
        var limit_page = 6;
        $('.paginate').removeClass('hide');
        $('.paginate').addClass('hide');
        
        
        $.each($('.paginate'), function( i, el ) {
          if(page < (limit_page / 2) && (i+1) <= (limit_page + 1)){
            $(el).removeClass('hide');
          }else if( ((i+1) <= (page) && (i+1) > (page-4)) || ((i+1) <= (page+4) && (i+1) > (page)) ){
            $(el).removeClass('hide');
          }   
        });
        
        if(page >= (2 * limit_page)){
          $('#paginate-survey').find('ul').find('.last-li').removeClass('hide');
        }else{
          if(!$('#paginate-survey').find('ul').find('.last-li').hasClass('hide')){
            $('#paginate-survey').find('ul').find('.last-li').addClass('hide');
          }
        }
        
        if(page >= limit_page){
          $('#paginate-survey').find('ul').find('.first-li').removeClass('hide');
        }else{
          if(!$('#paginate-survey').find('ul').find('.first-li').hasClass('hide')){
            $('#paginate-survey').find('ul').find('.first-li').addClass('hide');
          }
        }
        return false;
      }

    }
    window.statsProgress.init();
  }
});
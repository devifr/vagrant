$(document).ready(function(){
  if($(".grafik-container").length > 0){
    $(function() {
      var seriesOptions = [],
      seriesCounter = 0,
      names = $('.grafik-container').data('names'),
      colors = $('.grafik-container').data('color');
      params = window.location.search
      $.getJSON('/grafik'+params, function(data) {
        $.each(names, function(i, name) {
          seriesOptions[i] = {
            name: name,
            data: data[name.toLowerCase()],
            color: colors[i]
          };
          seriesCounter++;

          if (seriesCounter == names.length) {
            el_name = "#grafik-komulatif";
            createChart($(el_name), seriesOptions, data.categories);
            seriesOptions = [];
            seriesCounter = 0;
          }
        });
      }); //end names looping

      function createChart(el, series, categories) {
        el.highcharts({
            chart: {
              type: 'column'
            },

            legend: {
              enabled: true
            },

            title : {
              text : 'Graphic Statistic'
            },

            subtitle: {
              text: 'Schedule Report'
            },

            xAxis: {
              categories: categories
            },

            yAxis: {
              min: 0,
              allowDecimals: false,
              title: {
                text: 'Total'
              },
              plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
              }]
            },

            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },

            tooltip: {
              headerFormat: '<span style="font-size:12px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td><b>{point.y}</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
            },

            series: series
        });
      }
    });
  }
});

//pie chart
// $(document).ready(function(){

$(document).ready(function(){
  

  if($('.chart_pie').length){

    $.each($('.chart_pie'), function( i, el ) {
      var index = $(el).data('index');      
      var data_val = $('#chart_pie_'+index).data('value');

      var charts = 
      {
        // init all charts
        init: function()
        {
          // init pie chart
          this.chart_pie.init();

        },

        // utility class
        utility:
        {
          chartColors: [ "#EEE","#37a6cd" ],
          chartBackgroundColors: ["#fff", "#fff"],

          applyStyle: function(that)
          {
            that.options.colors = charts.utility.chartColors;
            that.options.grid.backgroundColor = { colors: charts.utility.chartBackgroundColors };
            that.options.grid.borderColor = charts.utility.chartColors[0];
            that.options.grid.color = charts.utility.chartColors[0];
          },
          
        },
          // pie chart
          chart_pie:
          {
            // chart data
            data: [
                { label: "",  data: (100-Number(data_val)) },
                { label: "Progress",  data: Number(data_val) }
            ],

            // will hold the chart object
            plot: null,

            // chart options
            options: 
            {
              series: {
                pie: { 
                  show: true,
                  highlight: {
                    opacity: 0.1
                  },
                  radius: 1,
                  stroke: {
                    color: '#fff',
                    width: 2
                  },
                  startAngle: 2,
                    combine: {
                              color: '#353535',
                              threshold: 0.05
                          },
                          label: {
                              show: true,
                              radius: 1,
                              formatter: function(label, series){
                                  return '<div class="label label-inverse">'+label+'&nbsp;'+series.percent.toFixed(2)+'%</div>';
                              }
                          }
                },
                grow: { active: false}
              },
              colors: [],
              legend:{show:false},
              grid: {
                      hoverable: true,
                      clickable: true,
                      backgroundColor : { }
                  },
                  tooltip: true,
              tooltipOpts: {
                content: "%s : %y.1"+"%",
                shifts: {
                  x: -30,
                  y: -50
                },
                defaultTheme: false
              }
            },
            
            // initialize
            init: function()
            {
              // apply styling
              charts.utility.applyStyle(this);
              
              this.plot = $.plot($("#chart_pie_"+index), this.data, this.options);
            }
          },
      };

      $(function()
      {
        charts.init();
      });
    })
  }

  if($('#gauge1').length || $('.chart_gauge').length){
    // meter gauge
    var _value = $('#gauge1').data('value') 
    s1 = [_value];
    plot3 = $.jqplot('gauge1',[s1],{
       seriesDefaults: {
           renderer: $.jqplot.MeterGaugeRenderer,
           rendererOptions: {
              label: _value.toFixed(2)+'%',
              labelPosition: 'bottom',
              labelHeightAdjust: -5,
              min: 10,
              max: 100,
              intervals:[30, 50, 80, 100],
              intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
           }
       }
    });

    // meter gauge
    $.each($('.chart_gauge'), function( i, el ) {
      var _value = $('#gauge-'+i).data('value');
      s1 = [_value];

      plot3 = $.jqplot('gauge-'+i,[s1],{
              seriesDefaults: {
                renderer: $.jqplot.MeterGaugeRenderer,
                rendererOptions: {
                  label: _value.toFixed(2)+'%',
                  labelPosition: 'bottom',
                  labelHeightAdjust: -5,
                  min: 10,
                  max: 100,
                  intervals:[30, 50, 80, 100],
                  intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
                }
              }
      });
    });
  }
// });

  if($(".summaries-container").length > 0){
    $(function() {
      var seriesOptions = [],
        seriesCounter = 0,
        charts = ['Preventive'],
        names = ['Total', 'Completed', 'Canceled'],
        colors = ["#058DC7", "#129210", "#A41221"];
        
        $.each(charts, function(j, chart){
          $.getJSON('/summary/weekly/'+chart, function(data) {
            $.each(names, function(i, name) {
              seriesOptions[i] = {
                name: name,
                data: data[name.toLowerCase()],
                color: colors[i]
              };

              seriesCounter++;

              if (seriesCounter == names.length) {
                el_name = "#summary-" + chart.toLowerCase().replace(/\W/,'-');
                createChart($(el_name), seriesOptions, data.categories, chart); 
                seriesOptions = [];
                seriesCounter = 0;
              }
            });
          }); //end names looping
        }); //end charts looping

      function createChart(el, series, categories, title) {
        el.highcharts({
            chart: {
              type: 'column'
            },

            legend: {
              enabled: true
            },

            title : {
              text : title + ' Summary'
            },

            subtitle: {
              text: 'weekly schedule'
            },

            xAxis: {
              categories: categories
            },

            yAxis: {
              min: 0,
              allowDecimals: false,
              title: {
                text: 'Sites'
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
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y}</b></td></tr>',
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
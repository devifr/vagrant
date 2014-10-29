class HomeController < ApplicationController

  def dashboard
    type = params[:type].present? ? params[:type] : 'weekly'
    @schedules = Schedule.show("statistics/#{type}", { start_date: params[:start_date],
                                                      end_date: params[:end_date],
                                                      per_page: -1
                                                    }).first
    if type == 'daily'
      @schedules_data = @schedules.group_by{|w| w.current_date.to_date }
    elsif type == 'monthly'
      @schedules_data = @schedules.group_by{|w| w.current_date.to_date.strftime('%m') }
    else
      @schedules_data = @schedules.group_by{|w| w.current_date.to_date.strftime('%W') }
    end
    if is_client?
      render 'home/dashboard_client'
    end
  end

  def summary
    @summaries = send("schedule_#{params[:type]}",params[:form])
    render json: @summaries
  end

  def grafik
    @grafik = generate_report
    render json: @grafik
  end

  def progress
    json_data = {}
    @schedules = Schedule.show('today')
    @progress = @schedules.count
    @progress = @schedules.inject(0){|sum, item| sum += item.progress.to_f } / @schedules.count if @progress > 0
    @site_schedules = @schedules.uniq_by(&:site)
    @progresses = get_progress
  end

  def js_template
    render template: "shares/form_templates/#{params[:field_type]}/#{params[:property]}", layout: false
  end

  def status_detail
    @schedules = DailyHistory.index({
      status: params[:status], 
      date: params[:date], 
      client: params[:client], 
      type: params[:type], 
      per_page: -1 
    }).first
  end

  private
    def get_progress
      progresses = []
      @site_schedules.each do |schedule|
        progress = 0
        total = 0
        @schedules.each do |sched|
          next unless sched.site == schedule.site
            total += 1
            progress += sched.progress.to_f
        end
        progresses << (progress/total)
      end
      return progresses
    end

    def schedule_weekly(form)
      start_date = 3.months.ago.monday.to_date
      end_date = Time.now.next_week.monday.to_date
      statistic = {total: [], completed: [], canceled: [], categories: []}

      while start_date < end_date do
        result = Schedule.show("stats",{start_on: start_date.to_s, end_on: start_date.next_week.to_s, status: 'total,completed,canceled'})
        statistic[:categories].push(start_date.strftime('%a, %d %b %Y'))
        statistic[:total].push(result.total.to_i)
        statistic[:completed].push(result.completed.to_i)
        statistic[:canceled].push(result.canceled.to_i)
        start_date = start_date.next_week
      end
      statistic
    end

    def generate_report
      statistic = { 'on progress' => [], verifying: [], approved: [], rejected: [],
                    'client approved' => [], 'client rejected' => [], categories: [] }
      type = params[:type].present? ? params[:type] : 'weekly'
      @schedules = Schedule.show("statistics/#{type}", { start_date: params[:start_date],
                                                        end_date: params[:end_date],
                                                        template: 'grafik',
                                                        per_page: -1
                                                      }).first
      # @schedules = Schedule.show('statistics/weekly', { template: 'grafik'}).first
      if type == 'daily'
        @schedules_data = @schedules.group_by{|w| w.current_date.to_date }
      elsif type == 'monthly'
        @schedules_data = @schedules.group_by{|w| w.current_date.to_date.strftime('%m') }
      else
        @schedules_data = @schedules.group_by{|w| w.current_date.to_date.strftime('%W') }
      end

      @schedules_data.each do |separate, schedule|
        if type == 'daily'
          separate = "#{separate}"
        elsif type == 'monthly'
          separate = "Month-#{separate.to_i}"
        else
          separate = "Week-#{separate.to_i + 1}"
        end
        get_status(statistic, separate, schedule.first)
      end
      statistic
    end

    def get_status(statistic, separate, schedule)
      if is_client?
        statistic[:categories].push(separate)
        statistic['on progress'].push(schedule.pending)
        statistic[:verifying].push(schedule.verify)
        statistic[:approved].push(schedule.approved)
        statistic[:rejected].push(schedule.rejected)
      else
        statistic[:categories].push(separate)
        statistic['on progress'].push(schedule.internal_pending)
        statistic[:approved].push(schedule.internal_approved)
        statistic['client approved'].push(schedule.client_approved)
        statistic['client rejected'].push(schedule.client_rejected)
      end
    end
end

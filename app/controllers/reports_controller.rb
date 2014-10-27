class ReportsController < ApplicationController
  before_filter :prepare_selects, only: [:schedules]

  def schedules
    @schedules, @pagination = Schedule.index({
                                keywords: params[:keywords],
                                page:     page,
                                per_page: per_page,
                                start_on: params[:start_on],
                                end_on:   params[:end_on]
                              }.merge(params))
    if current_user.client
      render "reports/schedule_per_site"
    end
  end

  def tracking
  end


  private
  def prepare_selects
    @operators = Operator.all(template: 'small')
    @users = User.all(template: 'simple')
    unless params[:action] == 'index'
      @sites = Site.all(template: 'small')
      # @clients = Client.all
      # @operators = Operator.all
      @projects = Project.all
    end
    @work_types = WorkType.all(template: 'small')
    @status = [
                ['On Progress','on_progress'],
                ['Waiting Client', 'waiting_client'],
                ['Client Approved', 'client_approved'],
                ['Client Rejected', 'client_rejected'],
              ]
    unless current_user.client
               @status.push(
                            ['Internal Approved', 'internal_approved'],
                            ['Internal Rejected', 'internal_rejected']
                           )
    end
  end
end

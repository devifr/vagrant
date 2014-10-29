OfficeTower::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

  def shared_methods
    post   :mass_delete, as: 'mass_delete', shallow: true, on: :collection
    match  :import,      as: 'import', via: [:get, :post], on: :collection
    delete :clean_db,    as: 'clean_database', on: :collection
  end

  resources :companies
  resources :operators do
    shared_methods
  end

  resources :service_points do
    shared_methods
  end

  resources :apks do
    shared_methods
  end

  resources :users do
    shared_methods
    get  :superiors, on: :collection
    get  :sites, on: :collection
  end

  resources :reports do
    get  :schedules, on: :collection
    get  :tracking, on: :collection
  end

  resources :roles do
    shared_methods
  end

  resources :accesses do
    shared_methods
  end

  resources :locations do
    shared_methods
  end

  resources :sites do
    shared_methods
    get :schedules,    on: :member
    get :get_operator, on: :member
  end

  resources :projects do
    shared_methods
  end

  resources :permissions do
    shared_methods
  end

  resources :clients do
    shared_methods
  end

  resources :schedules do
    shared_methods
    collection do
      get '/:id/preview/:group_id',   to: 'schedules#preview', as: 'preview'
      get '/:id/preview_corrective/', to: 'schedules#preview_corrective', as: 'preview_corrective'
      get '/site_list', to: 'schedules#site_list', as: 'site_list'
      get :event
      get :show_event
    end

    member do
      get '/report/:operator', to: 'schedules#report',        as: 'report'
      get '/preview_audit',    to: 'schedules#preview_audit', as: 'preview_audit'
      match '/approve/:operator_id', to: 'schedules#approve', as: 'approve', via: [:get, :post]
      match '/approve', to: 'schedules#approve_client', as: 'approve_client', via: [:get, :post]
    end
  end
  resources :work_types do
    shared_methods
  end
  resources :work_forms do
    shared_methods
    put '/clone', to: 'work_forms#clone'
    get '/select', to: 'work_forms#select', on: :collection
    get '/items', to: 'work_forms#items', on: :collection
  end
  resources :work_form_columns
  resources :work_form_rows do
    shared_methods
  end
  resources :work_form_groups do
    shared_methods
  end
  resources :work_form_group_items do
    shared_methods
    collection do
      get :setting
      get :setting_row
    end
  end

  put 'versions/:id/revert', to: 'versions#revert', as: 'revert_version'

  get 'work_form_groups/:id/preview', to: 'work_form_groups#preview', as: 'preview_group'

  post '/reschedule', to: 'schedules#reschedule', as: 'reschedule'

  match "/sort" => "work_form_groups#sort"
  match '/login',                 to: 'devise#login',   as: 'login', via: [:get, :post]
  match '/forgot',                to: 'devise#forgot',  as: 'forgot', via: [:get, :post]
  match '/change-password',       to: 'devise#change',  as: 'change', via: [:get, :post]
  get   '/logout',                to: 'devise#logout',  as: 'logout'
  get   '/dashboard',             to: 'home#dashboard', as: 'dashboard'
  get   '/dashboard/progress',    to: 'home#progress',  as: 'dashboard_progress'
  get   '/summary/:type/:form',   to: 'home#summary',   as: 'summary'
  get   '/template(/:field_type(/:property))', to: 'home#js_template', as: 'template'
  post  '/roles/level/:id',       to: 'roles#destroy_level'
  get   '/grafik',                to: 'home#grafik',    as: 'grafik'
  get   '/get_detail_data',       to: 'home#status_detail', as: 'get_detail_data'
  post  'work_form_item_values/:schedule_id/update_value/:operator_id', to: 'work_form_item_values#update_value', as: 'preview_update_value'

  root :to => 'home#dashboard'
end

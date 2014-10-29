#############################################################
#    Application
#############################################################

set :application, "office_tower"
set :port, 2222
set :deploy_to,   "/home/deploy/tower_office"
set :rack_env,    "production"
#############################################################
#    Settings
#############################################################

role :app, %w{deploy@192.168.120.140}
role :web, %w{deploy@192.168.120.140}
role :db,  %w{deploy@192.168.120.140}
role :worker, %w{deploy@192.168.120.140}

server '192.168.120.140', user: 'deploy', roles: %w{web app worker}, my_property: :my_value

set :default_env, { 
  path: "/usr/local/rbenv/shims:/usr/local/rbenv/bin:$PATH"
}
set :rbenv_type,     :system
set :rbenv_ruby,     '2.1.2'
set :rbenv_prefix,   "RACK_ENV=production RBENV_ROOT=#{fetch(:rbenv_path)} RBENV_VERSION=#{fetch(:rbenv_ruby)} #{fetch(:rbenv_path)}/bin/rbenv exec"
set :rbenv_map_bins, %w{rake gem bundle ruby}
set :rbenv_roles,    :all
#############################################################
#    Servers
#############################################################

# set :user, "deploy"
# set :domain, "192.168.120.140"
# set :domain, "192.168.88.47"
# set :domain, "mobile.sekap.net"
# server domain, :app, :web
# role :db, domain, :primary => true

#############################################################
#    Git
#############################################################

set :scm,        :git
set :deploy_via, :remote_cache
set :branch,     "master"
#set :repository, "git@bitbucket.org:yacobus/office_tower.git"
set :repo_url, 'git@github.com:devifr/vagrant.git'

set :unicorn_config_path, "/home/deploy/tower_office/current/config/unicorn.rb"
set :linked_dirs,     %w{public/system public/ckeditor_assets tmp log bin}
set :linked_files,    [
 'config/database.yml',
 'config/application.yml'
]
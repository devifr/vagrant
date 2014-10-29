# require 'capistrano/ext/multistage'
set :stage, :production
set :unicorn_rack_env, :production

# bundler bootstrap
# require 'bundler/capistrano'
# config valid only for Capistrano 3.1
lock '3.1.0'

set :application, 'office_tower'
# set :repo_url, 'git@github.com:domikado/sap_admin.git'

# Default branch is :master
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }.call
set :port, 2222

# Default deploy_to directory is /var/www/my_app
# set :deploy_to, '/home/deploy/tower_office'

# Default value for :scm is :git
set :scm, :git

# Default value for :format is :pretty
set :format, :pretty

# Default value for :log_level is :debug
set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, %w{config/database.yml}

# Default value for linked_dirs is []
# set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 3
require 'capistrano/ext/multistage'
set :stages, %w(staging production)
set :default_stage, "production"

# bundler bootstrap
require 'bundler/capistrano'
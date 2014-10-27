#############################################################
#    Application
#############################################################

set :application, "office_tower"
set :deploy_to,   "/home/domikado/tower_office"
set :rack_env,    "production"
#############################################################
#    Settings
#############################################################
set :bundle_flags, "--deployment --binstubs --shebang ruby-local-exec"
default_run_options[:pty] = true
ssh_options[:forward_agent] = true
# set :use_sudo, false
set :scm_verbose, true
# set :keep_releases, 3 unless exists?(:keep_releases)
set :default_env, {
  'PATH' => "/home/deploy/.rbenv/versions/2.1.2/bin:/home/deploy/.rbenv/shims:/home/deploy/.rbenv/bin:$PATH"
}
#############################################################
#    Servers
#############################################################

set :user, "vagrant"
set :domain, "127.0.0.1"
# set :domain, "192.168.88.47"
# set :domain, "mobile.sekap.net"
server domain, :app, :web
role :db, domain, :primary => true

#############################################################
#    Git
#############################################################

set :scm,        :git
set :deploy_via, :remote_cache
set :branch,     "production"
#set :repository, "git@bitbucket.org:yacobus/office_tower.git"
set :repo_url, 'git@github.com:domikado/sap_admin.git'

namespace :assets do
  desc "Precompile and Compress assets in a local file"
  task :precompile do
    run_locally("rm -rf public/assets/*")
    run_locally("RAILS_ENV=#{rails_env} bundle exec rake assets:precompile")
    run_locally("touch assets.tgz && rm assets.tgz")
    run_locally("tar zcvf assets.tgz public/assets/")
    run_locally("mv assets.tgz public/assets/")
  end

  desc "Upload assets"
  task :upload_assets do
    upload("public/assets/assets.tgz", release_path + '/assets.tgz')
    run "cd #{release_path}; tar zxvf assets.tgz; rm assets.tgz"
  end
end

namespace :deploy do
  task :start, :roles => :app, :except => { :no_release => true } do
    run "cd #{current_path} && bundle exec unicorn -c #{current_path}/config/unicorn.rb -E production -D"
  end

  task :stop, :roles => :app, :except => { :no_release => true } do
    run "kill -9 `cat #{current_path}/tmp/pids/unicorn.pid` || true"
  end

  task :restart, :roles => :app, :except => { :no_release => true } do
    stop
    start
  end

  task :symlink_shared_assets do
    run "rm -rf #{release_path}/tmp"
    run "rm -rf #{release_path}/log"
    run "ln -nfs #{shared_path}/tmp #{release_path}/tmp"
    run "ln -nfs #{shared_path}/log #{release_path}/log"
  end

  task :create_db do
    run "cd #{release_path} && bundle exec rake db:create RAILS_ENV=production"
  end
end

namespace :caches do
  desc "Clear Cache"
  task :clear do
    run "rm -rf #{current_path}/tmp/cache/*"
  end
end

before("deploy:cleanup") {set :use_sudo, false}
after "deploy:update", "deploy:cleanup"
after "deploy:finalize_update", "deploy:symlink_shared_assets"
after "deploy:finalize_update", "caches:clear"
after "deploy:finalize_update", "deploy:create_db"
after "deploy:finalize_update", "deploy:migrate"
before "deploy:update_code", "assets:precompile"
after "deploy:symlink", "assets:upload_assets"
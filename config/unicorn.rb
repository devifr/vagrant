# config/unicorn.rb
root = "/home/domikado/tower_office/current"
working_directory root

pid               "#{root}/tmp/pids/unicorn.pid"
stderr_path       "#{root}/log/unicorn_error.log"
stdout_path       "#{root}/log/unicorn.log"
listen            "#{root}/tmp/sockets/unicorn.sock"
worker_processes  2
timeout           360
preload_app       true

before_fork do |server, worker|

  Signal.trap 'TERM' do
    puts 'Unicorn master intercepting TERM and sending myself QUIT instead'
    Process.kill 'QUIT', Process.pid
  end

  # If you are using Redis but not Resque, change this
  if defined?(Resque)
    Resque.redis.quit
    Rails.logger.info('Disconnected from Redis')
  end

  defined?(ActiveRecord::Base) and
    ActiveRecord::Base.connection.disconnect!
end

after_fork do |server, worker|
  Signal.trap 'TERM' do
   puts 'Unicorn worker intercepting TERM and doing nothing. Wait for master to sent QUIT'
  end

  # If you are using Redis but not Resque, change this
  if defined?(Resque)
    Resque.redis = 'redis://localhost:6379/'
    Rails.logger.info('Connected to Redis')
  end

  # defined?(ActiveRecord::Base) and
    # ActiveRecord::Base.establish_connection
end

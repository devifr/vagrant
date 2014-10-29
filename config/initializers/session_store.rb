# Be sure to restart your server when you modify this file.

OfficeTower::Application.config.session_store :cookie_store, key: '_office_tower_session'

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rails generate session_migration")
OfficeTower::Application.config.session_store :redis_store, servers: { 
  host: ENV['REDIS_HOST'], 
  port: ENV['REDIS_PORT'], 
  db:   ENV['REDIS_SESSION_DB'], 
  namespace: ENV['REDIS_SESSION_CHANNEL'] 
}, expire_in: 24.hours

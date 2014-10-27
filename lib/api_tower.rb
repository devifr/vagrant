require 'yajl'
require 'ostruct'
require 'httmultiparty'
require 'csv'

class Hash
  def to_openstruct
    mapped = {}
    each{ |key, value| mapped[key] = value.to_openstruct }
    OpenStruct.new(mapped)
  end
end

class Object
  def to_openstruct
    self
  end
end

class Array
  def to_openstruct
    map{|el| el.to_openstruct}
  end
end

module Errors
  class NotAuthorized < StandardError; end
  class RecordNotFound < StandardError; end
  class ApplicationError < StandardError; end
end

module ApiTower
  class Base
    include HTTMultiParty
    base_uri ENV["API_HOST"]
    default_timeout 3000

    cattr_accessor :respond_headers

    def self.access_token
      Thread.current[:access_token]
    end

    def self.access_token=(persistence_token)
      Thread.current[:access_token] = persistence_token
    end

    def self.resource_name(resource)
      @resource_name = resource.to_s
    end

    def self.resource
      @resource_name
    end

    def self.resource_post(path="", options={})
      responser post("/#{resource}#{path}", params(:body, options))
    end

    def self.resource_get(path="", options={})
      responser get("/#{resource}#{path}", params(:query, options))
    end

    def self.resource_put(path="", options={})
      responser put("/#{resource}#{path}", params(:body, options))
    end

    def self.resource_delete(path="", options={})
      responser delete("/#{resource}#{path}", params(:query, options))
    end

    def self.edit(id, options={})
      resource_get("/#{id}", options)
    end

    def self.update(id, options={})
      resource_put("/#{id}", options)
    end

    def self.destroy(id, options={})
      resource_delete("/#{id}", options)
    end

    def self.mass_destroy(options={})
      responser delete("/#{resource}/mass_destroy", params(:query, options))
    end

    def self.clean_db(options={})
      responser delete("/#{resource}/clean_db", params(:query, options))
    end

    def self.clone(id,options={})
      resource_put("/clone/#{id}", options)
    end

    def self.reschedule(options={})
      resource_post("/reschedule", options)
    end

    def self.create(options={})
      resource_post("", options)
    end

    def self.import(options={})
      resource_post("/import", options)
    end

    def self.export(options={})
      resource_get("/export.csv", options)
    end

    def self.revert(id, options={})
      resource_put("/revert/#{id}", options)
    end

    def self.show(id, options={})
      resource_get("/#{id}", options)
    end

    def self.find(id, options={})
      resource_get("#{id}", options)
    end

    def self.index(options={})
      _result = resource_get("", options)
      return [[],nil] if _result.blank?
      return [[],_result.last] if _result.first.blank?
      _result
    end

    def self.all(options={})
      index(options.merge(per_page: -1)).first
    end

    def self.respond_headers
      @@respond_headers
    end

    def self.respond_headers=(_headers)
      @@respond_headers = _headers
    end

    def self.params(type, options)
      options.delete(:action) || options.delete('action')
      options.delete(:controller) || options.delete('controller')

      options.merge!(access_token: access_token) if access_token.present?
      if self.respond_headers && self.respond_headers['set-cookie'] && options[:access_token].blank?
        { type => options, headers: {'Cookie' => self.respond_headers['set-cookie']} }
      else
        return { type => options }
      end
    end

    def self.responser(result)
      if result.parsed_response.is_a?(String) && result.headers['content-type'] =~ /application|csv/i
        [result.parsed_response, {}]
      else
        begin
          respond = Yajl::Parser.new.parse(result.body).to_openstruct
        rescue
          Rails.logger.info '---------------------------------------------------'
          Rails.logger.info result.body
          Rails.logger.info '---------------------------------------------------'
          raise Errors::ApplicationError
        end

        self.respond_headers=result.headers

        if result.code.to_i == 401 && respond.messages.first =~ /Unauthorize|Login/i
          raise Errors::NotAuthorized
        elsif result.code.to_i == 404
          raise Errors::RecordNotFound
        end

        return respond.messages unless respond.data
        return respond.data unless respond.page
        [respond.data, respond.page]
      end
    end
  end
end
Dir["#{Rails.root}/lib/**/*.rb"].each {|f| require(f)}

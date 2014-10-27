class ServicePoint < ApiTower::Base
  resource_name :service_points

  DATETYPE =  [
                ["Created Date", "created_at"],
                ["Updated Date", "updated_at"]
              ]

end

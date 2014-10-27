class CompaniesController < ResourcesController
  defaults resource_class: Company

  protected
  def input_parameter
    Company.stub_params(params)
  end

end

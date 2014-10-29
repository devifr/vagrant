class ApksController < ResourcesController
  defaults resource_class: Apk

  protected
    def input_parameter
      Apk.stub_params(params)
    end
end

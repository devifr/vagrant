class WorkFormGroup < ApiTower::Base
  resource_name :work_form_groups

  FIELD_TYPES = [
    ['Label Only',    'label'],
    ['Check Box',     'checkbox'],
    ['Radio Button',  'radio'],
    ['Dropdown Menu', 'dropdown'],
    ['Text Field',    'text_field'],
    ['File',          'file']
  ]
  FORM_TYPES = [
      ['Table Form', 1],
      ['Fieldset', 0]
  ]
end
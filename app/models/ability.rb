class Ability
  include CanCan::Ability
  attr_accessor :user

  def initialize(user)
    user ||= User.new
    @user = user
    cannot :manage, :all

    user.role.levels.each do |level|
      level.permission_list.each do |permission|
        class_name = level.access_name.gsub('::','')
        begin
          can(permission.to_sym, Object.const_get(class_name))
        rescue
        end
      end
    end

  end

  def user_record?(class_name, record)
    class_name == 'User' && record.id == @user.id
  end

  def own_record?(record)
    (record.user_id && record.user_id == @userid)
  end
end

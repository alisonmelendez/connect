class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :user_profile_image
  has_many :scheduled_events
end

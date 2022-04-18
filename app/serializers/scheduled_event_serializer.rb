class ScheduledEventSerializer < ActiveModel::Serializer
  attributes :id, :eventName, :date, :time, :description, :image, :createdBy
  belongs_to :user
end

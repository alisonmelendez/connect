class ScheduledEventSerializer < ActiveModel::Serializer
  attributes :id, :eventName, :date, :time, :description, :image, :createdBy
end

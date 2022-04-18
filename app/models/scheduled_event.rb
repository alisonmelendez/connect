class ScheduledEvent < ApplicationRecord
    belongs_to :user
    
    validates :eventName, presence: true
    validates :date, presence: true
    validates :time, presence: true
    validates :description, presence: true
    validates :image, presence: true
    validates :createdBy, presence: true

end

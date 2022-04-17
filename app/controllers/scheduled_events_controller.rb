class ScheduledEventsController < ApplicationController

    def index
        events = ScheduledEvent.all
        render json: events 
    end
    
    def create
        event = ScheduledEvent.create!(event_params)
        event.save
        render json: event, status: :created  
    end

    #need update and destory for the dashboard so that a user can update
    #and delete an event from their listed events 

    private 
    
    def event_params
        params.permit(:eventName, :date, :time, :description, :image, :createdBy)
    end

end

class ScheduledEventsController < ApplicationController

    def index
        events = ScheduledEvent.all
        render json: events 
    end
    
    def create
        @name = params[:eventName]
        @date = params[:date]
        @time = params[:time]
        @description = params[:description]
        @image = params[:image]
        @creator = params[:createdBy]
        @user_id = @current_user.id
       
        event = ScheduledEvent.create!(
            {eventName: @name, 
            date: @date, 
            time: @time, 
            description: @description, 
            image: @image, 
            createdBy: @creator,
            user_id: @user_id})

            render json: event, status: :ok
    end

    def update
        event = find_event
        event.update(event_params)
        render json: event, status: :ok
    end

    def destroy
        event = find_event
        event.destroy
        head :no_content
    end

    #need update and destory for the dashboard so that a user can update
    #and delete an event from their listed events 

    private 
    
    def event_params
        params.permit(:eventName, :date, :time, :description, :image, :createdBy)
    end

    def find_event
        ScheduledEvent.find(params[:id])
    end

end

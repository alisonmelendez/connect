class ScheduledEventsController < ApplicationController

    def index
        events = ScheduledEvent.all
        render json: events 
    end

    def show 
        event = find_event
        render json: event, status: :ok
    end
    
    def create
        @name = params[:eventName]
        @date = params[:date]
        @time = params[:time]
        @description = params[:description]
        @image = params[:image]
        @creator = params[:createdBy]
        @invitees = params[:invitees]
        @user_id = @current_user.id
       
        event = ScheduledEvent.create!({
            eventName: @name, 
            date: @date, 
            time: @time, 
            description: @description, 
            image: @image, 
            createdBy: @creator,
            invitees: @invitees,
            user_id: @user_id
            })

            render json: event, status: :ok
    end

    def update
        @invitees = params[:invitees]
        event = find_event
        event.update({invitees: @invitees}) ### check the params 
        render json: event, status: :ok
    end

    def destroy
        event = find_event
        event.destroy
        head :no_content
    end

    def event_invitees
        event = find_event
        render json: event.invitees
    end
    
    private 
    
    def event_params
        params.permit(:eventName, :date, :time, :description, :image, :createdBy, :invitees)
    end

    

    def find_event
        ScheduledEvent.find(params[:id])
    end

end

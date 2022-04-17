Rails.application.routes.draw do
  resources :scheduled_events
  # get '/hello', to: 'application#hello_world'

  #try a get "/me" 
  #post "/scheduled_event" (name of the resource)
  #post "/create", to: "scheduled_events#create"
  get "/index", to: "scheduled_events#index"
end

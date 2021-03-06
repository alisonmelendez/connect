Rails.application.routes.draw do
  resources :users
  resources :scheduled_events, only: [:index, :show, :destroy, :create, :update]

  # patch "/scheduled_events", to:"scheduled_events#update"

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"

  delete "/logout", to: "sessions#destroy"

  get "/invitees", to: "scheduled_events#event_invitees"
  get "/index", to: "scheduled_events#index"
end

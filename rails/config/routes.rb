Rails.application.routes.draw do

  #:speakers are send through API
  namespace :api do
    resources :speakers
  end

end

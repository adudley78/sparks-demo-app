Rails.application.routes.draw do
  
  namespace :api, defaults: { format: 'json' } do
    get 'sparks', to: 'sparks#index'
  end

end

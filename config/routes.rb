Rails.application.routes.draw do
  
  namespace :v1, defaults: { format: 'json' } do
    get 'sparks', to: 'sparks#index'
  end

end

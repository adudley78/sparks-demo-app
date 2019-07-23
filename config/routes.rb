Rails.application.routes.draw do
  
  root 'site#index'

  # namespace :api, defaults: { format: 'json' } do
  #   get 'sparks', to: 'sparks#index'
  # end

  get '*page', to: 'site#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  namespace :api do
      resources :sparks, only: %i[index show create destroy update]
  end

end

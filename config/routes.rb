Rails.application.routes.draw do
  
  root 'site#index'

  # namespace :api, defaults: { format: 'json' } do
  #   get 'sparks', to: 'sparks#index'
  # end

  get '*page', to: 'site#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  get 'sparks', to: 'site#index'
  get 'sparks/new', to: 'site#index'
  get 'sparks/:id', to: 'site#index'
  # get 'sparks/:id/edit', to: 'site#index'

  get 'comments', to: 'site#index'
  get 'comments/new', to: 'site#index'
  get 'comments/:id', to: 'site#index'

  namespace :api do
      resources :sparks, only: %i[index show create destroy update]
      resources :comments, only: %i[index show create destroy update]
  end

end

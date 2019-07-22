class ApplicationController < ActionController::Base
    # protect_from_forgery
    # Ensure that if no CSRF token is provided, Rails will respond with an empty session
    protect_from_forgery with: :null_session
end

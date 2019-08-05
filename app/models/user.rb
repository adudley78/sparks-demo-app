class User < ApplicationRecord
    has_many :sparks
    has_many :comments
end

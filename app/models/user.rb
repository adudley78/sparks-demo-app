class User < ApplicationRecord
    has_many :sparks, optional: true
    has_many :comments, optional: true
end

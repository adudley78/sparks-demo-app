class Spark < ApplicationRecord
    has_many :comments
    belongs_to :user
    belongs_to :spark
end

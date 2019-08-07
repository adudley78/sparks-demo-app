class Spark < ApplicationRecord
    has_many :comments
    belongs_to :user, optional: true
    belongs_to :spark, optional: true
end

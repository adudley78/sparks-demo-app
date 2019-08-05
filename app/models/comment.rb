class Comment < ApplicationRecord
  belongs_to :spark
  belongs_to :user
end

class Comment < ApplicationRecord
  belongs_to :spark, optional: true
  belongs_to :user, optional: true
end

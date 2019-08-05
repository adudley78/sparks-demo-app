class AddUserToSparks < ActiveRecord::Migration[5.2]
  def change
    add_reference :sparks, :user, foreign_key: true
  end
end

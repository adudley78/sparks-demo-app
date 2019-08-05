class AddSparkToUsers < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :spark, foreign_key: true
  end
end

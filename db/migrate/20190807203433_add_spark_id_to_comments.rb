class AddSparkIdToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :spark_id, :integer
  end
end

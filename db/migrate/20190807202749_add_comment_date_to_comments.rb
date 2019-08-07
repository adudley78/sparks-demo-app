class AddCommentDateToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :comment_date, :date
  end
end

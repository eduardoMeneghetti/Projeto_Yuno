class RemoveSenhaFromUsers < ActiveRecord::Migration[7.2]
  def change
    remove_column :users, :senha, :string
  end
end

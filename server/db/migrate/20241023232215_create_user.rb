class CreateUser < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|
      t.string :nome_completo, null: false
      t.string :nickname, null: false
      t.string :email, null: false
      t.string :senha, null: false
      t.integer :idade, null: false
      t.integer :total_post

      t.timestamps
    end
    
    add_index :users, :nickname, unique: true
    add_index :users, :email, unique: true
  end
end

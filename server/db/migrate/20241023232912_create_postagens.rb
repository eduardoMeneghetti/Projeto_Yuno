class CreatePostagens < ActiveRecord::Migration[7.2]
    def change
      create_table :postagens do |t|
        t.text :descricao, null: false
        t.integer :num_comentarios
        t.integer :num_curtidas
        t.references :user, null: false, foreign_key: true
  
        t.timestamps
      end
    end
  end
  
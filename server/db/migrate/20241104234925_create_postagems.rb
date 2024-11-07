class CreatePostagems < ActiveRecord::Migration[7.2]
  def change
    create_table :postagems do |t|
      t.timestamps
    end
  end
end

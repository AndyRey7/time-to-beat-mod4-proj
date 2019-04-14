class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.string :imgURL
      t.integer :hours

      t.timestamps
    end
  end
end

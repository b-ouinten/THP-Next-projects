class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.text :description
      
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end

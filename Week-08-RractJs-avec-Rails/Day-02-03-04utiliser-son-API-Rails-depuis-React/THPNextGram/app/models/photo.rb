class Photo < ApplicationRecord

  # Relationships
  belongs_to :user
  has_many :comments
end

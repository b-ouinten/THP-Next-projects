class Comment < ApplicationRecord

  # Relationships
  belongs_to :user
  belongs_to :photo
end

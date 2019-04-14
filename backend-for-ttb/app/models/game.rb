class Game < ApplicationRecord
    validates :title, presence: true
    validates :hours, presence: true
    validates :genre, presence: true
    validates :imgURL, presence: true
end

class Postagen < ApplicationRecord
    validates :descricao, presence: true
    validates :num_comentarios, numericality: { only_integer: true }, allow_nil: true
    validates :num_curtidas, numericality: { only_integer: true }, allow_nil: true

    after_initialize :set_defaults, if: :new_record?

    private

    def set_defaults
      self.num_comentarios ||= 0  
      self.num_curtidas ||= 0      
    end
  
    belongs_to :user
    has_many :comentario
end
  
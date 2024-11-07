class Comentario < ApplicationRecord
  validates :descricao, presence: true
  validates :num_curtidas, numericality: { only_integer: true }, allow_nil: true

  after_initialize :set_defaults, if: :new_record?

  belongs_to :postagen, foreign_key: 'postagens_id'
  belongs_to :user

  after_create :increment_postagen_comment_count
  after_destroy :decrement_postagen_comment_count

  private

  def set_defaults
    self.num_curtidas ||= 0    
  end

  def increment_postagen_comment_count
    postagen.increment!(:num_comentarios)
  end

  def decrement_postagen_comment_count
    if postagen.num_comentarios > 0
      postagen.decrement!(:num_comentarios)
    end
  end
  
end

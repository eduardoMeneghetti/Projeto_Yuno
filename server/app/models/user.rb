class User < ApplicationRecord
  has_secure_password

  validates :nome_completo, presence: true
  validates :nickname, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }, if: :new_record?
  validates :idade, presence: true
  validates :total_post, numericality: { only_integer: true }, allow_nil: true

  before_save :downcase_email

  after_initialize :set_defaults, if: :new_record?

  has_many :postagens
  has_many :comentarios

  private

  def downcase_email
    self.email = email.downcase
  end

  def set_defaults
    self.total_post ||= 0  
  end
end

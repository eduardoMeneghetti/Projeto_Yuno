class ApplicationController < ActionController::API

  # Função para codificar o token
  def encode_token(payload)
    JWT.encode(payload, 'secret')
  end

  # Função para decodificar o token de sessão
  def decode_token
    auth_header = request.headers['Authorization']
    if auth_header
      token = auth_header.split(' ').last
      begin
        JWT.decode(token, 'secret', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  # Função para obter o usuário autenticado
  def auth_user
    decoded_token = decode_token
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  # Função para autorização do acesso às rotas protegidas
  def auth
    render json: { message: 'Você precisa estar logado' }, status: :unauthorized unless auth_user
  end

end

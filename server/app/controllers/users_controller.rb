class UsersController < ApplicationController

    def create
        @usuario = User.create(user_params)

        if @usuario.valid?
            render json: { error: 'Usuário criado com Sucesso' }, status: :unprocessable_entity
        else
            render json: { error: 'Usuário ou senha inválidos' }, status: :unprocessable_entity
        end
    end

    def login
        @user = User.find_by(nickname: login_params[:nickname])
        if @user && @user.authenticate(login_params[:password])
            token = encode_token({user_id: @user.id})
            render json: {user: @user, token: token}, status: :ok
        else
            render json: { error: 'Usuário ou senha inválidos' }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:user).permit(:nome_completo, :nickname, :email, :idade, :password, :password_confirmation)
    end

    def login_params
        params.require(:user).permit(:nickname, :password)
    end
    
end

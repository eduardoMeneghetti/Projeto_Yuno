class ComentariosController < ApplicationController
  before_action :auth

  def create 
    @comentario = Comentario.new(comentario_params)

    if @comentario.save
      render json: @comentario, status: :created
    else
      render json: @comentario.errors, status: :unprocessable_entity
    end
  end

  def index 
    comentarios = Comentario.order('created_at DESC')
    render json: { status: 'SUCCESS', message: 'Comentários carregados', data: comentarios }, status: :ok
  end

  def destroy
    @comentario = Comentario.find_by(id: params[:id]) 
    
    if @comentario
      @comentario.destroy
      render json: { status: 'SUCCESS', message: 'Comentário deletado' }, status: :ok
    else
      render json: { status: 'ERROR', message: 'Comentário não encontrado' }, status: :not_found
    end
    
  end

  def like
    comentario = Comentario.find_by(id: params[:id])
    
    if comentario
      comentario.increment!(:num_curtidas)
      render json: { status: 'SUCCESS', message: 'Comentário curtido', data: comentario }, status: :ok 
    else
      render json: { status: 'ERROR', message: 'Comentário não encontrado' }, status: :not_found
    end
  end
      
  def deslike
    comentario = Comentario.find_by(id: params[:id])
    
    if comentario
      comentario.decrement!(:num_curtidas) if comentario.num_curtidas > 0
      render json: { status: 'SUCCESS', message: 'Comentário descurtido', data: comentario }, status: :ok 
    else
      render json: { status: 'ERROR', message: 'Comentário não encontrado' }, status: :not_found
    end
  end

  private 

  def comentario_params
    params.require(:comentario).permit(:descricao, :num_curtidas, :postagens_id, :user_id)
  end

end

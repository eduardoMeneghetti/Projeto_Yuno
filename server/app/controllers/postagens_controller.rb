class PostagensController < ApplicationController
  before_action :auth

  def create 
    @postagen = Postagen.new(postagen_params)

    if @postagen.save
      render json: @postagen, status: :created
    else
      render json: @postagen.errors, status: :unprocessable_entity
    end
  end

  def index 
    postagens = Postagen.order('created_at DESC')
    render json: { status: 'SUCCESS', message: 'Posts carregados', data: postagens }, status: :ok
  end

  def destroy
    @postagens = Postagen.find_by(id: params[:id]) 

    if @postagens
        @postagens.destroy
        render json: { status: 'SUCCESS', message: 'Postagem deletado' }, status: :ok
    else
        render json: { status: 'ERROR', message: 'Postagem não encontrada' }, status: :not_found
    end
  end

  def like
    postagen = Postagen.find_by(id: params[:id])

    if postagen
      postagen.increment!(:num_curtidas)
      render json: { status: 'SUCCESS', message: 'Postagem curtida', data: postagen }, status: :ok
    else
      render json: { status: 'ERROR', message: 'Postagem não encontrada' }, status: :not_found
    end
  end
  
  def deslike
    postagen = Postagen.find_by(id: params[:id])
    
    if postagen
      postagen.decrement!(:num_curtidas) if postagen.num_curtidas > 0
      render json: { status: 'SUCCESS', message: 'Postagem descurtida', data: postagen }, status: :ok
    else
      render json: { status: 'ERROR', message: 'Postagem não encontrada' }, status: :not_found
    end
  end

  def update
    postagen = postagen.find_by(id: params[:id])
    
    if postagen
      if postagen.update(postagen_params)
        render json: { status: 'SUCCESS', message: 'Comentário atualizado', data: postagen }, status: :ok
      else
        render json: { status: 'ERROR', message: 'Falha ao atualizar o comentário', data: postagen.errors }, status: :unprocessable_entity
      end
    else
      render json: { status: 'ERROR', message: 'Comentário não encontrado' }, status: :not_found
    end
  end

  private

  def postagen_params
    params.require(:postagen).permit(:descricao, :num_curtidas, :num_postagens, :user_id)
  end
end

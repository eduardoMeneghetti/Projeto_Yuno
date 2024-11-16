import React, { useState } from 'react';
import like from '../../assets/style/icons/likeSemFundo.png';
import likeBlack from '../../assets/style/icons/linkePostPreto.png'; 
import user_ft from '../../assets/style/icons/user.png';
import comment from '../../assets/style/icons/comentariosSemFundo.png';
import menuCom from '../../assets/style/icons/menuCom.png';

function PublicationList({ descricao, numComentarios, numCurtidas, nickname, userId, postId  }) {
  const [liked, setLiked] = useState(false); // Estado para controlar o like

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNX0.GT5mPqymt6ybtHGDnIyY7mE87kRYdQs8HrHvrYAbLuw";

  const handleLikeClick = async () => {
    setLiked(!liked); // Alterna o estado do like

    const url = liked
      ? `http://localhost:3000/postagens/deslike/${postId}` 
      : `http://localhost:3000/postagens/like/${postId}`;  

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,  
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postId }) 
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar o like/dislike');
      }

      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="publicacoes">
      <table>
        <tbody>
          <tr>
            <td className="teste1">
              <img src={user_ft} alt="user_ft" style={{ width: '30px', height: '30px' }} />
              <p>{nickname}</p>
            </td>
            <td className="teste">
              <button className="react imgBtn">
                <img className="teste" src={menuCom} alt="main_menu" style={{ width: '15px', height: '15px' }} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <p className='descricao'>{descricao}</p>
      <hr />

      <section className="botoes_comentarios">
        <button className="react imgBtn" type="button" onClick={handleLikeClick}>
          <img
            src={liked ? likeBlack : like}
            style={{ width: '20px', height: '20px' }}
            alt="like_button"
          />
        </button>
        <a href="/feed/comment.html" className="react imgBtn">
          <img src={comment} style={{ width: '20px', height: '20px' }} alt="comment_button" />
        </a>
        <p>{numComentarios} comentários</p>
      </section>
    </div>
  );
}

export default PublicationList;

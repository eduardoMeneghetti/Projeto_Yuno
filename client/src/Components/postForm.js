import React, { useState } from 'react';
import AvisoOk from './Aviso_ok'; // Importando o componente AvisoOk

function PostForm() {
  const [descricao, setDescricao] = useState('');
  const [showSuccess, setShowSuccess] = useState(false); // Estado para controlar a exibição da mensagem de sucesso

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      postagen: {
        descricao: descricao,
        num_curtidas: null,
        num_comentarios: null,
        user_id: 2
      }
    };

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNX0.GT5mPqymt6ybtHGDnIyY7mE87kRYdQs8HrHvrYAbLuw";

    try {
      const response = await fetch('http://localhost:3000/postagens/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Enviando o token na requisição
        },
        body: JSON.stringify(postData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Postagem criada com sucesso:', data);
        setDescricao('');
        setShowSuccess(true);

        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        console.error('Erro ao criar a postagem:', response.status);
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
    }
  };

  return (
    <div>
      {showSuccess && <AvisoOk />} 

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="O que está pensando hoje?... "
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
        <button className="botao" type="submit"><strong>Publicar</strong></button>
      </form>
    </div>
  );
}

export default PostForm;

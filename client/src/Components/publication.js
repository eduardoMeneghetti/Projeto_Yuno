import React, { useEffect, useState } from 'react';
import PublicationList from './Publication_list';

function Publication() {
  const [publications, setpublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNX0.GT5mPqymt6ybtHGDnIyY7mE87kRYdQs8HrHvrYAbLuw";

  const fetchpublications = async () => {
    try {
      const response = await fetch('http://localhost:3000/postagens/index', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Erro ao buscar os comentários');
      }

      const data = await response.json();
      console.log("Dados recebidos da API:", data);

    
      setpublications(Array.isArray(data.data) ? data.data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchpublications(); 

    const intervalId = setInterval(() => {
      fetchpublications();
    }, 30000); // 30000 ms = 30 segundos

    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {publications.length === 0 ? (
        <p>Nenhum comentário encontrado</p>
      ) : (
        publications.map((publication) => (
          <PublicationList
            key={publication.id}
            descricao={publication.descricao}
            numComentarios={publication.num_comentarios}
            numCurtidas={publication.num_curtidas}
            userId={publication.user_id}
            nickname={publication.user_nickname}
            postId={publication.id}
          />
        ))
      )}
    </div>
  );
}

export default Publication;

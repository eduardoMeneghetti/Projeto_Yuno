import '../../assets/style/root.css';
import '../../assets/style/layout.css';
import '../../assets/style/style.css';
import '../../App.css';
import React from 'react';
import Header from './HeaderPosts';
import PostForm from './postForm';
import Publication from './publication'; // Importa o componente que faz a busca e renderiza os comentários

function MyPostagem() {
  return (
    <div>
      <Header />
      <main>
        <PostForm />
        <Publication /> 
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default MyPostagem;

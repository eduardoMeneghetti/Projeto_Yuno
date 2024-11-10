// Components/Header.js
import React from 'react';
import login from '../assets/style/icons/login.png';
import logo_text from '../assets/style/icons/LOGO_YUNO_SITE_SEM_FUNDO.png';


function Header() {
  return (
    <header className="root">
      <nav className="cabecalho">
        <img src={logo_text} alt="Login icon" width={'8%'} />
        <img src={login} alt="Login icon" />
      </nav>
    </header>
  );
}

export default Header;

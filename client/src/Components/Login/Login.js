import React, { useState } from 'react';
import '../../assets/style/loginStyle.css'
import { Link } from 'react-router-dom';

function Login() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    const postData = {
      user: {
        nickname:nickname,
        password:password
      }
    };

    try {
      const response =  await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login Realizado:', data);
        setNickname('');
        setPassword(true);

        setTimeout(() => {
          setPassword(false);
        }, 5000);
      } else {
        console.error('Erro ao Realizar Login', response.status);
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
    }
  };

  return (
    <div className="main-login">
      <div className="card-login">
        <h4>LOGIN</h4>

        <form onSubmit={handleLogin} className="Formulario">
          <div className="textfield">
            <input
              type="text"
              className="usuario"
              placeholder="Usuário ou E-mail..."
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>
          <br></br>
          <br></br>
          <div>
            <div className="textfield">
              <input
                type="password"
                className="senha"
                placeholder="Senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="infos">
              <div>
                <input type="checkbox" className="checkbox" /> Lembre-me.
              </div>
              <div>
                <a className="senha_esquecida" href="/reset-password">Esqueceu sua senha?</a>
              </div>
            </div>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Mensagem de erro */}

          <button className="btn-login" type="submit">Entrar</button>
          <br></br>
        </form>

        <p>Ainda não tem uma Conta? </p>
        <Link to="/signup">Venha fazer parte da nossa Comunidade!</Link>
        </div>
    </div>
  );
}

export default Login;

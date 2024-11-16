import React, { useState } from 'react';
import '../../assets/style/Cadastro.css';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome_completo: '',
    nickname: '',
    email: '',
    idade: '',
    password: '',
    password_confirmation: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCadastro = async (event) => {
    event.preventDefault();

    const postData = { user: formData };

    try {
      const response = await fetch('http://localhost:3000/users/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Cadastro Realizado:', data);
        setSuccessMessage('Cadastro realizado com sucesso!');
        setErrorMessage('');
        setFormData({
          nome_completo: '',
          nickname: '',
          email: '',
          idade: '',
          password: '',
          password_confirmation: '',
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Erro ao realizar cadastro.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      setErrorMessage('Erro ao conectar com o servidor.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="main-register">
      <div className="card-register">
        <h4>CADASTRO</h4>

        <form onSubmit={handleCadastro} className="Formulario">
          <div className="textfield">
            <input
              type="text"
              name="nome_completo"
              className="Nome_completo"
              placeholder="Nome Completo"
              value={formData.nome_completo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="textfield">
            <input
              type="text"
              name="nickname"
              className="Nickname"
              placeholder="Nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="textfield">
            <input
              type="email"
              name="email"
              className="Email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="textfield">
            <input
              type="number"
              name="idade"
              className="idade"
              placeholder="Idade"
              value={formData.idade}
              onChange={handleChange}
              required
            />
          </div>
          <div className="textfield">
            <input
              type="password"
              name="password"
              className="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="textfield">
            <input
              type="password"
              name="password_confirmation"
              className="password_confirmation"
              placeholder="Confirme a Senha"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <button className="btn-cadastro" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;

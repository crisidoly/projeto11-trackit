import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import gif from '../assets/Animated Logo in Violet Gradient Tech Style.gif';
import image from '../assets/Animated Logo in Violet Gradient Tech Style.jpg';

export default function PaginaLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  



  function login(e) {
    e.preventDefault();
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
    const body = { email, password };

    const promise = axios.post(URL, body);
    promise
      .then((res) => {
        localStorage.setItem('Image', res.data.image);
        localStorage.setItem('Token', res.data.token);
        navigate('/hoje');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }
  

  const [showGif, setShowGif] = useState(true);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const tempoEspera = 3000;

    const timer = setTimeout(() => {
      setShowGif(false);
      setShowImage(true);
    }, tempoEspera);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Logo src={showGif ? gif : showImage ? image : ''} alt="" />
      <Form onSubmit={login}>
        <Input 
          data-test="email-input"
          type="email" 
          placeholder="EMAIL" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <div>
          <Input  
          data-test="password-input"
            type="password"
            placeholder="SENHA"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button 
        type="submit" 
        onClick={login}
        data-test="login-btn">
          LOGIN
        </Button>
      </Form>
      <Login>
        <Link 
        to={"/cadastro"} 
        data-test="signup-link">
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </Login>
    </Container>
  );
}



const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  border: 0;
  input::placeholder {
    color:black;
  }
`;

const Input = styled.input`
  height: 45px;
  width: 303px;
  background-color: white;
  text-align: center;
  color: black;
  font-family: "Oswald";
  font-size: 22px;
  margin-top: 8px;
  font-weight: 900;
  border-radius: 24px;
  border: none;
  input::placeholder {
    color:blue;
  }

`;

const Button = styled.button`
  background-color: #cf42b8;
  height: 51px;
  width: 311px;
  font-weight: 900;
  font-family: "Oswald";
  font-size: 22px;
  margin-top: 16px;
  border-style: none;
  border-radius: 24px;
  border: none;
`;


const Logo = styled.img`
  width: 300px;
  height: auto;
`;

const Container = styled.div`
  background-color: #160F3D;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Login = styled.div`
display: flex;
justify-content: center;
color: white;
text-decoration: none;
margin-top: 8px;
font-family: "Oswald";
font-weight: 300;
  	p {
      text-decoration: none;
      color: white;
    }
`

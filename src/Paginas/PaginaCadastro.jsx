import axios from "axios";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import gif from '../assets/Animated Logo in Violet Gradient Tech Style.gif';
import Logoimage from '../assets/Animated Logo in Violet Gradient Tech Style.jpg';

export default function PaginaLogin() {

  const [showGif, setShowGif] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
    const body = { email, name, image, password };
    
    try {
      const response = await axios.post(URL, body);
      if (response.status === 200) {
      navigate('/');
      } else {
      throw new Error(response.data);
      }
      } catch (error) {
      alert(error.message);
      }
      };

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
      <Form>
        {showGif ? (
          <Logo src={gif} alt="" />
        ) : showImage ? (
          <Logo src={Logoimage} alt="" />
        ) : null}
        <Input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL" name="email" required/>
        <Input value={name} type="text" placeholder="NOME" onChange={(e) => setName(e.target.value)} name="nome" required />
        <Input value={image} type="url" placeholder="FOTO" onChange={(e) => setImage(e.target.value)} name="foto" required />
        <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="SENHA" name="senha" required/>
        <Button type="submit" onClick={handleRegister}>CADASTRAR</Button>
      </Form>
      <Login>
        <Link to={"/"}>
          <p>Já tem uma conta? Faça login!</p>
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
  border: none;
  border-radius: 24px;
`;


const Logo = styled.img`
  width: 300px;
  height: auto;
`;

const Container = styled.div`
  background-color: #160F3D;
  width: 100vw;
  height: 100vh;
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

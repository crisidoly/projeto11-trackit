import axios from "axios";
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import gif from '../assets/Animated Logo in Violet Gradient Tech Style.gif';
import image from '../assets/Animated Logo in Violet Gradient Tech Style.jpg';

export default function PaginaLogin() {
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
    <>
    <Body>
      <Form>
        {showGif ? (
          <Logo src={gif} alt="" />
        ) : showImage ? (
          <Logo src={image} alt="" />
        ) : null}
        <Input type="email" placeholder="EMAIL" name="email" />
        <Input type="password" placeholder="SENHA" name="senha" />
        <Input type="nome" placeholder="NOME" name="nome" />
        <Input type="foto" placeholder="FOTO" name="foto" />
        <Button data-identifier="login-btn">LOGIN</Button>
      </Form>
      <Login>
        <Link to={"/"}>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </Login>
    </Body>
    </>
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

const Body = styled.div`
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

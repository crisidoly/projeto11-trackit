import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import trackit from '../assets/trackit.jpg';

export default function Header() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
      setHeaderHeight(headerContainer.offsetHeight);
    }
  }, []);

  return (
    <Container id="header-container">
      <Logo src={logo} />
      <Trackit src={trackit} />
      <FotoUsuario src="https://onovomamaco.com.br/wp-content/uploads/2020/12/macaquinho-1024x1024.jpg" />
    </Container>
  );
}

const Container = styled.div`
  background-color: #160F3D;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 70px;
  position: sticky;
  top: 0;
  box-shadow: 0px 4px 4px 0px #00000026;
`;

const Logo = styled.img`
  height: 70px;
  width: auto;
`;

const Trackit = styled.img`
  height: 70px;
  width: auto;
`;

const FotoUsuario = styled.img`
  height: 54px;
  margin-top: 8px;
  margin-right: 8px;
  width: auto;
  border-radius: 100px;
  display: flex;
`;
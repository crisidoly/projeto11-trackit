import styled from "styled-components"
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function PaginaHistorico() {
  return (
    <>
      <Container>
        <Header data-test="header"/>
        <Footer data-test="menu"/>
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: #F2F2F2;
  width: 100vw;
  height: 100vh;
  display: flex;
`;
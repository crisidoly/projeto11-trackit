import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate()


  const navigateToHabitos = () => {
    navigate("/habitos");
  };

  const navigateToHoje = () => {
    navigate("/hoje");
  };

  const navigateToHistorico = () => {
    navigate("/historico");
  };

  return (
    <Container>
      <Habitos onClick={navigateToHabitos}>
        <h1>Hábitos</h1>
      </Habitos>
      <Hoje onClick={navigateToHoje}>
        <h1>Hoje</h1>
      </Hoje>
      <Historico onClick={navigateToHistorico}>
        <h1>Histórico</h1>
      </Historico>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #160F3D;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 70px;
  box-shadow: 4px 0px 0px 4px #00000026;
  display: flex;
  justify-content: space-evenly;
  font-size: 40px;
  align-items: center;
  color: white;

`

const Habitos = styled.div`

`

const Hoje = styled.div`

`
const Historico = styled.div`

`
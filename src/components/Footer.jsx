import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
  const navigate = useNavigate();

  const navigateToHabitos = () => {
    navigate("/habitos");
  };

  const navigateToHoje = () => {
    navigate("/hoje");
  };

  const navigateToHistorico = () => {
    navigate("/historico");
  };


  const progresso = 75;

  return (
    <Container data-test="menu">
      <Habitos data-test="habit-link" onClick={navigateToHabitos}>
        <h1>Hábitos</h1>
      </Habitos>
      <HojeContainer data-test="today-link" onClick={navigateToHoje}>
        <CircularProgressbar
          value={progresso}
          text="Hoje"
          styles={{
            path: { stroke: 'purple' },
            text: { fill: 'white' },
            trail: { stroke: 'gray' } 
          }}
        />
      </HojeContainer>
      <Historico data-test="history-link" onClick={navigateToHistorico}>
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
  font-size: 25px;
  align-items: center;
  color: white;
`;

const Habitos = styled.div``;

const Historico = styled.div``;

const HojeContainer = styled.div`
width: 100px; 
height: 100px; 
margin-bottom: 50px;
color: white;
border-radius: 100px;
background-color: #160F3D;
`;
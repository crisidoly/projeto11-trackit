import styled from 'styled-components';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CriarHabito from '../components/CriarHabito.jsx';
import ListaHabitos from '../components/ListaHabitos.jsx';
import { useState } from 'react';
import axios from 'axios';

export default function PaginaHabitos() {
  const [habits, setHabits] = useState([]);
  const token = localStorage.getItem('Token');

  const excluirHabito = async (habitId) => {
    try {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      await axios.delete(URL, config);
      setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== habitId));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <Container>
        <Header/>
        <CriarHabito setHabits={setHabits} token={token} />
        <ListaHabitos habits={habits} excluirHabito={excluirHabito} />
        <Footer/>
      </Container>
    </>
  );
}



const Container = styled.div`
  background-color: #F2F2F2;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

`;


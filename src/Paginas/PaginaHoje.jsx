import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HabitosHoje from "../components/HabitosHoje";
import CriarHabito from "../components/CriarHabito";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import axios from "axios";

export default function PaginaHoje() {
  dayjs.locale('pt-br');
  const token = localStorage.getItem('Token');
  const hoje = dayjs().format('dddd, DD/MM');


  return (
    <Container>
      <Header data-test="header"/>
      <Dia>
        <Data data-test="today">{hoje}</Data>
        <HabitosHoje/>
      </Dia>
      
      <Footer data-test="menu"/>
    </Container>
  );
}

const Container = styled.div`
  background-color: #F2F2F2;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Dia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;

`;

const Data = styled.div`
  display: flex;
  justify-content: left;
  position: fixed;
  top: 0;
  left: 0;
  margin-left: 20px;
  margin-top: 100px;
  font-size: 24px;
`;  
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import styled from 'styled-components';

const ListaHabitos = ({ habits, excluirHabito }) => {
  return (
    <Container data-test="habit-container">
      <Ul>
        {habits.map((habit) => (
          <HabitoPronto key={habit.id}>
            <div>
              <TituloHabito data-test="habit-name">{habit.name} </TituloHabito>
              <DiasContainer data-test="habit-day">
                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
                  <DiaSemana key={index} selected={habit.days.includes(index)}>
                    {day}
                  </DiaSemana>
                ))}
              </DiasContainer>
            </div>
            <BotaoExcluir data-test="habit-delete-btn" onClick={() => excluirHabito(habit.id)}>
              <RiDeleteBinLine />
            </BotaoExcluir>
          </HabitoPronto>
        ))}
      </Ul>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100vw;
  margin: 0;
`;

const HabitoPronto = styled.li`
  background-color: #160F3D;
  margin-top: 10px;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  width: 90%;
  align-items: center;
  flex-direction: column;
`;

const TituloHabito = styled.h3`
  font-size: 18px;
  color: white;
`;

const DiasContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;

const DiaSemana = styled.div`
  width: 38px;
  height: 38px;
  margin: 5px;
  background-color: ${({ selected }) => (selected ? 'purple' : 'white')};
  display: flex;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-weight: bold;
  text-align: center;
  padding: 2px;
`;

const BotaoExcluir = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  font-family: "Lexend";
  font-weight: 400;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 10px;
`;

export default ListaHabitos;

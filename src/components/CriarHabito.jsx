import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function CriarHabito({ setHabits, token }) {
  const [nomeHabito, setNomeHabito] = useState("");
  const [diasSelecionados, setDiasSelecionados] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [habitoCriado, setHabitoCriado] = useState(null);

  const diasSemana = [
    { nome: "D", valor: 0 },
    { nome: "S", valor: 1 },
    { nome: "T", valor: 2 },
    { nome: "Q", valor: 3 },
    { nome: "Q", valor: 4 },
    { nome: "S", valor: 5 },
    { nome: "S", valor: 6 }
  ];

  useEffect(() => {
    const fetchHabitos = async () => {
      try {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const response = await axios.get(URL, config);
        setHabits(response.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    fetchHabitos();
  }, []);

  const criarHabito = async () => {
    try {
      const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const novoHabito = {
        name: nomeHabito,
        days: diasSelecionados
      };

      const response = await axios.post(URL, novoHabito, config);

      setHabits((prevHabits) => [...prevHabits, response.data]);
      setNomeHabito("");
      setDiasSelecionados([]);
      setHabitoCriado(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const excluirHabito = async (habitoId) => {
    try {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitoId}`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      await axios.delete(URL, config);

      setHabits((prevHabits) => prevHabits.filter((habito) => habito.id !== habitoId));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const toggleFormulario = () => {
    setMostrarFormulario((prevValue) => !prevValue);
    setNomeHabito("");
    setDiasSelecionados([]);
    setHabitoCriado(null);
  };

  const handleDiaClick = (diaValor) => {
    if (diasSelecionados.includes(diaValor)) {
      setDiasSelecionados((prevDias) => prevDias.filter((dia) => dia !== diaValor));
    } else {
      setDiasSelecionados((prevDias) => [...prevDias, diaValor]);
    }
  };

  return (
    <CriarHabitoContainer data-test="habit-create-container">
      <BotaoCriarHabito data-test="habit-create-btn" onClick={toggleFormulario}>{mostrarFormulario ? '-' : '+'}</BotaoCriarHabito>
      {mostrarFormulario && (
        <FormularioHabito >
          <InputHabito
            data-test="habit-name-input"
            type="text"
            value={nomeHabito}
            onChange={(event) => setNomeHabito(event.target.value)}
            placeholder="Nome do hábito"
          />
          <SelecaoDias>
            {diasSemana.map((dia) => (
              <DiaSemana
              data-test="habit-day"
                key={dia.valor}
                onClick={() => handleDiaClick(dia.valor)}
                className={diasSelecionados.includes(dia.valor) ? "selected" : ""}
              >
                {dia.nome}
              </DiaSemana>
            ))}
          </SelecaoDias>
          <BotaoSalvar data-test="habit-create-save" onClick={criarHabito}>Salvar</BotaoSalvar>
        </FormularioHabito>
      )}
      </CriarHabitoContainer>
  );
}

const CriarHabitoContainer = styled.div`
  margin-top: 20px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const DiaSemana = styled.button`
  width: 30px;
  height: 30px;
  
`;

const BotaoCriarHabito = styled.button`
  background-color: #CF42B8;
  position: fixed;
  right: 0;
  margin-right: 10px;
  color: white;
  border: none;
  border-radius: 100px;
  margin-right: 12px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 30px;
  
`;

const FormularioHabito = styled.div`
  background-color: #aaaaaa;
  width: 90%;
  height: auto;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const InputHabito = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 310px;
`;

const SelecaoDias = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  justify-content: center;

  button {
    margin: 5px;
    border: none;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    cursor: pointer;

    &.selected {
      background-color: purple;
      color: white;
    }
  }
`;

const HabitoCriado = styled.div`
  padding: 10px;
  margin-top: 20px;
`;

const BotaoSalvar = styled.button`
  border-radius: 10px;
  border: 0px;
  width: 120px;
  height: 25px;
`

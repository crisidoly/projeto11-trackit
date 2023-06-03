import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PaginaCadastro from '../Paginas/PaginaCadastro.jsx';
import PaginaLogin from '../Paginas/PaginaLogin.jsx';
import PaginaHoje from '../Paginas/PaginaHoje.jsx';
import PaginaHabitos from '../Paginas/PaginaHabitos.jsx';
import PaginaHistorico from '../Paginas/PaginaHistorico.jsx';
import '../assets/reset.css'

function App() {
  const [count, setCount] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaLogin />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/habitos" element={<PaginaHabitos />} />
        <Route path="/hoje" element={<PaginaHoje />} />
        <Route path="/historico" element={<PaginaHistorico />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

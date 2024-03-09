import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListagemClientes from './pages/ListagemClientes';
import CadastroCliente from './pages/CadastroCliente';
import VisualizacaoRota from './pages/VisualizacaoRota';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListagemClientes />} />
        <Route path='/cadastro' element={<CadastroCliente />} />
        <Route path='/rotas' element={<VisualizacaoRota />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Container, Box, Button } from '@mui/material';
import TabelaClientes from '../components/tabelaClientes';
import { useNavigate } from 'react-router-dom';
import clienteService from '../services/clienteService';

function ListagemClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await clienteService.listarTodos();
        setClientes(data);
      } catch (error) {
        setClientes([]);
        console.error('Não foi possível buscar os clientes', error);
      }
    };
    fetchClientes();
  }, []);

  const navigate = useNavigate();

  return (
    <Container>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        marginBottom={4}
      >
        <h2>Listagem de Clientes</h2>
        <Box>
          <Button
            variant='contained'
            color='primary'
            onClick={() => navigate('/cadastro')}
            style={{ marginRight: '10px' }}
          >
            Cadastrar Cliente
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => navigate('/rotas')}
          >
            Mostrar Rota
          </Button>
        </Box>
      </Box>
      <TabelaClientes clientes={clientes} />
    </Container>
  );
}

export default ListagemClientes;

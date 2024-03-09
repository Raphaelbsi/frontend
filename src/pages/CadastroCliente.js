import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Snackbar,
  Grid,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import clienteService from '../services/clienteService';

function CadastroCliente() {
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    telefone: '',
    coordenada_x: '',
    coordenada_y: ''
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isCoordenada = name === 'coordenada_x' || name === 'coordenada_y';
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: isCoordenada ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await clienteService.cadastrar(cliente);
      setSnackbarMessage('Cliente cadastrado com sucesso!');
      setOpenSnackbar(true);
      setCliente({
        nome: '',
        email: '',
        telefone: '',
        coordenada_x: '',
        coordenada_y: ''
      });
    } catch (error) {
      console.error('Não foi possível cadastrar o cliente', error);
      setSnackbarMessage('Erro ao cadastrar cliente!');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container component='main' maxWidth='sm'>
      <Paper elevation={6} sx={{ mt: 8, p: 4 }}>
        <Typography component='h1' variant='h5' align='center'>
          Cadastro de Cliente
        </Typography>
        <form onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='nome'
                label='Nome'
                name='nome'
                autoComplete='nome'
                value={cliente.nome}
                onChange={handleChange}
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
                autoComplete='email'
                value={cliente.email}
                onChange={handleChange}
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='telefone'
                label='Telefone'
                name='telefone'
                autoComplete='telefone'
                value={cliente.telefone}
                onChange={handleChange}
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='coordenada_x'
                label='Coordenada X'
                name='coordenada_x'
                value={cliente.coordenada_x}
                onChange={handleChange}
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='coordenada_y'
                label='Coordenada Y'
                name='coordenada_y'
                value={cliente.coordenada_y}
                onChange={handleChange}
                margin='normal'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar
          </Button>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant='outlined'
                fullWidth
                onClick={() => navigate('/')}
                sx={{ mt: 2 }}
              >
                Voltar para Lista
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant='outlined'
                fullWidth
                onClick={() => navigate('/rotas')}
                sx={{ mt: 2 }}
              >
                Ver Rotas
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Container>
  );
}

export default CadastroCliente;

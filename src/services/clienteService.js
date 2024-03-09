import axios from 'axios';

const baseURL = 'http://localhost:3000';

const clienteService = {
  listarTodos: async () => {
    try {
      const response = await axios.get(`${baseURL}/clientes`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  cadastrar: async (cliente) => {
    try {
      const response = await axios.post(`${baseURL}/clientes`, cliente);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  rota: async () => {
    try {
      const response = await axios.get(`${baseURL}/rota`);
      return response.data;
    } catch (error) {
      console.error('Error ao Calcular Rotas', error);
      throw error;
    }
  }
};

export default clienteService;

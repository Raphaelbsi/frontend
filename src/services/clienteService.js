import axios from 'axios';

const baseURL = 'http://localhost:3000';

const clienteService = {
  listarTodos: async () => {
    try {
      const response = await axios.get(`${baseURL}/clientes`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar clientes', error);
      throw error;
    }
  },
  cadastrar: async (cliente) => {
    try {
      const response = await axios.post(`${baseURL}/clientes`, cliente);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar cliente', error);
      throw error;
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

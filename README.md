# Backend

1. O backend deve ser iniciado antes do frontend para garantir que a API esteja disponível.

# Repositórios

- Backend: https://github.com/Raphaelbsi/backend.git
- Frontend: https://github.com/Raphaelbsi/frontend.git

```bash
  git clone https://github.com/Raphaelbsi/frontend.git
  cd frontend
```

```bash
   npm install
```

- ou

```bash
   yarn install
```

# (Opcional) Se o backend não estiver rodando na porta 3000, ajuste a variável de ambiente REACT_APP_API_BASE_URL no arquivo .env do frontend para apontar para o endereço correto do backend.

- Inicie a aplicação React em uma porta diferente da do backend (por padrão, o React tentará usar a porta 3000, mas se estiver ocupada, ele sugerirá outra):

  ```bash
    npm start
  ```

* ou

  ```bash
    yarn start
  ```

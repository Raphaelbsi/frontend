import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

function TabelaClientes({ clientes }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='Tabela de clientes'>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Coordenada X</TableCell>
            <TableCell>Coordenada Y</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((cliente) => (
            <TableRow key={cliente.id}>
              <TableCell>{cliente.nome}</TableCell>
              <TableCell>{cliente.email}</TableCell>
              <TableCell>{cliente.telefone}</TableCell>
              <TableCell>{cliente.coordenada_x}</TableCell>
              <TableCell>{cliente.coordenada_y}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TabelaClientes;

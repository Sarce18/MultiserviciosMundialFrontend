import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(nroDesc, limiteInfe, limiteSup, porcentajeDesc) {
  return { nroDesc, limiteInfe, limiteSup, porcentajeDesc };
}

const rows2 = [
  createData(1, 100, 200, 0.05),
  createData(2, 201, 300, 0.10),
  createData(3, 301, 400, 0.15),
  // Agrega más filas según sea necesario
];

export default function Tabla(rows) {
  return (
    <TableContainer component={Paper} style={{ maxHeight: '384px', overflowY: 'auto' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nro</TableCell>
            <TableCell align="right">Limite Inferior</TableCell>
            <TableCell align="right">Limite Superior</TableCell>
            <TableCell align="right">Porcentaje Descuento (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.rows.map((row) => (
            <TableRow key={row.nroDesc}>
              <TableCell component="th" scope="row">
                {row.nroDesc}
              </TableCell>
              <TableCell align="right">{row.limiteInfe}</TableCell>
              <TableCell align="right">{row.limiteSup}</TableCell>
              <TableCell align="right">{(row.porcentajeDesc * 100).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
import { useEffect, useState } from 'react';
// @mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// services
import * as r from 'src/services/read';
import * as w from 'src/services/write';
import { address } from 'src/services/config';

// ----------------------------------------------------------------------

export function UserTable() {
  const [data, setData] = useState({
    balanceBeneficiary: 0,
  });

  useEffect(() => {
    async function getData() {
      //await r.balance().then((res) => setData((prev) => ({ ...prev, balanceBeneficiary: res })));
    }
    getData();
  }, []);

  const handleIncrement = () => {
    //w.increment();
  };
  const handleDecrement = () => {
    w.decrement();
  };

  return (
    <div
      style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', marginBottom: '2rem' }}
    >
      <TableContainer component={Paper} sx={{ maxWidth: '800px' }}>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ background: '#61DBFB', color: '#fff' }} align='center'>
                Contrato
              </TableCell>
              <TableCell sx={{ background: '#61DBFB', color: '#fff' }} align='center'>
                Decrementar
              </TableCell>
              <TableCell sx={{ background: '#61DBFB', color: '#fff' }} align='center'>
                Balance
              </TableCell>
              <TableCell sx={{ background: '#61DBFB', color: '#fff' }} align='center'>
                Incrementar
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell align='center'>{address}</TableCell>
              <TableCell align='center'>
                <Button variant='outlined' size='small' onClick={handleDecrement}>
                  {'-'}
                </Button>
              </TableCell>

              <TableCell align='center'>{data.balanceBeneficiary}</TableCell>
              <TableCell align='center'>
                <Button variant='outlined' size='small' onClick={handleIncrement}>
                  {'+'}
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

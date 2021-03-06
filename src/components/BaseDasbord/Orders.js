import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Link as RouterLink } from 'react-router-dom';

// Generate Order Data
function createData(id, date, name, Type, amount) {
  return { id, date, name, Type, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'receita', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'receita', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'receita', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'despesa', -654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'despesa', -212.79),
];

/* function preventDefault(event) {
  event.preventDefault();
} */

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Ordens Recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            
            <TableCell>Tipo</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
             
              <TableCell>{row.Type}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link  color="primary" component={ RouterLink } to="/order" >
          Veja mais 
        </Link>
      </div>
    </React.Fragment>
  );
}
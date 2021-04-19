import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Generate Data
// function createData(rank, username, result_grand_total, carbon_emission_goal) {
//   return { username, result_grand_total, carbon_emission_goal };
// }
     
function getData(props) {
    const {token} = props;
    fetch(`http://localhost:3000/data`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body: JSON.stringify()
     })
    .then((res)=>res.json())
    .then(responseJSON => {
        //return { username, result_grand_total, carbon_emission_goal};
    })
}

 const rows = [
//   getData(1, username, result_grand_total, carbon_emission_goal),
//   getData(2, username, result_grand_total, carbon_emission_goal),
//   getData(3, username, result_grand_total, carbon_emission_goal),
//   getData(4, username, result_grand_total, carbon_emission_goal),
//   getData(5, username, result_grand_total, carbon_emission_goal),
 ];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function LeaderBoard() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1>Leader Board</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Carbon Footprint</TableCell>
            <TableCell>Goal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
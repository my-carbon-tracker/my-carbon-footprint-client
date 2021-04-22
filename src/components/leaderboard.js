import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table, Box} from '@material-ui/core/';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function LeaderBoard() {
  const classes = useStyles();
  const [firstPlaceName, setFirstPlaceName] = React.useState();
  const [firstPlaceEmissions, setFirstPlaceEmissions] = React.useState();
  const [firstPlaceGoal, setFirstPlaceGoal] = React.useState();
  const [secondPlaceName, setSecondPlaceName] = React.useState();
  const [secondPlaceEmissions, setSecondPlaceEmissions] = React.useState();
  const [secondPlaceGoal, setSecondPlaceGoal] = React.useState();
  const [thirdPlaceName, setThirdPlaceName] = React.useState();
  const [thirdPlaceEmissions, setThirdPlaceEmissions] = React.useState();
  const [thirdPlaceGoal, setThirdPlaceGoal] = React.useState();
  const [fourthPlaceName, setFourthPlaceName] = React.useState();
  const [fourthPlaceEmissions, setFourthPlaceEmissions] = React.useState();
  const [fourthPlaceGoal, setFourthPlaceGoal] = React.useState();
  const [fifthPlaceName, setFifthPlaceName] = React.useState();
  const [fifthPlaceEmissions, setFifthPlaceEmissions] = React.useState();
  const [fifthPlaceGoal, setFifthPlaceGoal] = React.useState();

    fetch(`http://localhost:3000/data`,{
        method:'GET',
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify()
     })
    .then((res)=>res.json())
    .then(data => {
      setFirstPlaceName(data[0]["username"]);
      setFirstPlaceEmissions(data[0]["result_grand_total"]);
      setFirstPlaceGoal(data[0]["carbon_emission_goal"]);

      setSecondPlaceName(data[1]["username"]);
      setSecondPlaceEmissions(data[1]["result_grand_total"]);
      setSecondPlaceGoal(data[1]["carbon_emission_goal"]);

      setThirdPlaceName(data[2]["username"]);
      setThirdPlaceEmissions(data[2]["result_grand_total"]);
      setThirdPlaceGoal(data[2]["carbon_emission_goal"]);

      setFourthPlaceName(data[3]["username"]);
      setFourthPlaceEmissions(data[3]["result_grand_total"]);
      setFourthPlaceGoal(data[3]["carbon_emission_goal"]);

      setFifthPlaceName(data[4]["username"]);
      setFifthPlaceEmissions(data[4]["result_grand_total"]);
      setFifthPlaceGoal(data[4]["carbon_emission_goal"]);
    })

  return (
    <React.Fragment>
      <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', paddingTop:20}}>
        Leader Board
      </Box>
      <Table size="small" style={{backgroundColor: "#B4E6CD"}}>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Carbon Footprint kg CO2 Per kg</TableCell>
            <TableCell>Emission Goal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>{firstPlaceName}</TableCell>
              <TableCell>{firstPlaceEmissions}</TableCell>
              <TableCell>{firstPlaceGoal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>{secondPlaceName}</TableCell>
              <TableCell>{secondPlaceEmissions}</TableCell>
              <TableCell>{secondPlaceGoal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>{thirdPlaceName}</TableCell>
              <TableCell>{thirdPlaceEmissions}</TableCell>
              <TableCell>{thirdPlaceGoal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>{fourthPlaceName}</TableCell>
              <TableCell>{fourthPlaceEmissions}</TableCell>
              <TableCell>{fourthPlaceGoal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>{fifthPlaceName}</TableCell>
              <TableCell>{fifthPlaceEmissions}</TableCell>
              <TableCell>{fifthPlaceGoal}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
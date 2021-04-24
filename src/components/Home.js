import { Box, Container, Grid, Zoom, Card, Paper, Divider } from '@material-ui/core';
import Pledges from '../components/pledges';
import LeaderBoard from './leaderboard';
import React, { useContext } from 'react';
import { useOffsetContext } from '../contexts/pledgeContext'
import { useAverageEmissionContext } from '../contexts/averageEmissionContext';
import UserData from "./getUserData";
import { useLocationContext } from '../contexts/locationContext';
import { useEmissionContext } from '../contexts/emissionContext';
import { useUserNameContext } from "../contexts/usernameContext";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  card: {
    display:'flex',
    flexDirection: 'column',
    minWidth:'100%',
    backgroundColor:'#B3E7CD',
    opacity: '.75'
  },
  text: {
    opacity:'1'
  },
  paper:{
    backgroundColor:'#B3E7CD',
    opacity: '.75',
    display:'flex',
    alignItems:'center',
    width:'100%',
    padding:15
  }
})
function Home (props) {
  const classes = useStyles();
  const {token} = props;
  const { name, setName } = useUserNameContext();
  const { totalOffset, setTotalOffset } = useOffsetContext(); 
  const { compareToOthers, setCompareToOthers } = useAverageEmissionContext();
  const { location, setLocation } = useLocationContext()
  const { totalEmission, setTotalEmission } = useEmissionContext();
  let carbonFootprint  = totalEmission - (totalOffset * 1000);

  return(
    <div style={{textAlign: "center", background: 'linear-gradient(#DFB593, #DF7B7D 50%)', height:'175vh'}}>
        <Box sx={{ backgroundColor: 'background.default', minHeight: '100%', py: 3}}>
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={12} sm={12} xl={12} xs={12}>
                {/* <Zoom in={true}>
                  <Paper variant="outlined" className={classes.paper}> */}
                    <Box className={classes.text} fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', paddingTop:20}}>
                      Welcome back {name}
                      <UserData token={token}/>
                    </Box> 
                  {/* </Paper>
                </Zoom> */}
              </Grid>

              {/* <Grid item lg={6} sm={6} xl={12} xs={12}>
                <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" letterSpacing={2} style={{color:'#2E4089', paddingTop:30, paddingBottom:10}}>
                  Location {location}
                </Box>                 
              </Grid> */}
            <Paper variant="outlined" className={classes.paper}>
              <Grid item lg={4} sm={4} xl={4} xs={4}>
                <Box className={classes.text} fontWeight="fontWeightMedium" fontSize={16} letterSpacing={2} style={{color:'#2E4089'}}>
                  {carbonFootprint} kilos
                </Box>
                <Box className={classes.text} fontWeight="fontWeightBold" fontSize={16} letterSpacing={2} style={{color:'#2E4089', paddingTop:10, paddingBottom:10, marginRight:10}}>
                  Your Total CO2 Emissions
                </Box>
              </Grid>
              <Divider orientation="vertical" flexItem style={{marginRight:"-1px"}} />
              <Grid item lg={4} sm={4} xl={4} xs={4}>
                <Box className={classes.text} fontWeight="fontWeightMedium" fontSize={16} letterSpacing={2} style={{color:'#2E4089'}}>
                {totalEmission} kg CO2/Week
                </Box>
                <Box className={classes.text} fontWeight="fontWeightBold" fontSize={16} letterSpacing={2} style={{color:'#2E4089', paddingTop:10, paddingBottom:10}}>
                  Emissions Goal
                </Box>
              </Grid>
              <Divider orientation="vertical" flexItem style={{marginLeft:"-1px"}}/>
              <Grid item lg={3} md={3} xl={3} xs={3}>
                <Box className={classes.text} fontWeight="fontWeightMedium" fontSize={16} letterSpacing={2} style={{color:'#2E4089', marginLeft:10, marginRight:"-40px"}}>
                  {compareToOthers} CO2 Tons/Year
                </Box>
                <Box className={classes.text} fontWeight="fontWeightBold" fontSize={16} letterSpacing={1} style={{color:'#2E4089', paddingTop:10, paddingBottom:10, marginLeft:10, marginRight:"-30px"}}>
                  Avg. Emissions For {location}
                </Box>
                {/* add graph  */}
              </Grid>
            </Paper>

              <Grid item lg={6} md={6} xl={12} xs={12} >
                {/* list of pledges you can take */}
                <Pledges />
              </Grid>

              <Grid item lg={6} md={6} xl={12} xs={12} >
                <LeaderBoard />
              </Grid>

            </Grid>
          </Container>
          <div style={{position:'fixed', bottom:0}}>              
          </div>
        </Box>
        </div>
       
    )
}

export default Home;
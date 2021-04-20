import { Box, Container, Grid } from '@material-ui/core';
import Pledges from '../components/pledges';
import LeaderBoard from './leaderboard';
import React, { useContext } from 'react';
import { useOffsetContext } from '../contexts/pledgeContext'
import { useAverageEmissionContext } from '../contexts/averageEmissionContext';
import UserData from "./getUserData";
import { useLocationContext } from '../contexts/locationContext';
import { useEmissionContext } from '../contexts/emissionContext';
import { useUserNameContext } from "../contexts/usernameContext";

function Home (props) {
  const {token} = props;
  const { name, setName } = useUserNameContext();
  const { totalOffset, setTotalOffset } = useOffsetContext(); 
  const { compareToOthers, setCompareToOthers } = useAverageEmissionContext();
  const { location, setLocation } = useLocationContext()
  const { totalEmission, setTotalEmission } = useEmissionContext();
  let carbonFootprint  = totalEmission - (totalOffset * 1000);
 

    return(
    <>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth={false}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={6}
                sm={6}
                xl={12}
                xs={12}
              >
                <UserData token={token}/>
                <p>Welcome back {name}  </p>
              </Grid>

              <Grid
                item
                lg={6}
                sm={6}
                xl={12}
                xs={12}
              >
                <p>Location {location} </p>
              </Grid>

              <Grid
                item
                lg={6}
                sm={6}
                xl={12}
                xs={12}
              >
                <p>Your current total carbon emission {carbonFootprint} </p>

              </Grid>

              <Grid
                item
                lg={6}
                sm={6}
                xl={12}
                xs={12}
              >
                <p>Compared to average person in {location}</p>
                <p> {compareToOthers} CO2 Tons per Year</p>
              </Grid>

              <Grid
                item
                lg={6}
                md={6}
                xl={12}
                xs={12}
              >
                  graph 
                {/* add graph  */}
              </Grid>

              <Grid
                item
                lg={6}
                md={6}
                xl={12}
                xs={12}
              >
                {/* list of pledges you can take */}
                <Pledges />
              </Grid>

              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                {/* Leardboard*/}
                <LeaderBoard />
              </Grid>

            </Grid>
          </Container>
          <div style={{position:'fixed', bottom:0}}>
              
          </div>
          <footer style={{marginTop: 8}}>
              {/* <div style={{position:'fixed', bottom:0}}> */}
                  <climate-clock />
              {/* </div> */}
              </footer>
        </Box>
      </>
       
    )
}

export default Home;
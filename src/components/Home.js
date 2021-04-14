import {
    Box,
    Container,
    Grid
  } from '@material-ui/core';
import Pledges from '../components/pledges';
// import userCurrentEmissions from '../components/usersEmission';
import React, { useContext } from 'react';
import { useOffsetContext } from '../contexts/pledgeContext'
import { useAverageEmissionContext } from '../contexts/averageEmissionContext';

function Home () {
  const { totalOffset, setTotalOffset } = useOffsetContext() 
  console.log(totalOffset) 
  // const { totalEmissions, setTotalEmissions } = useAverageEmissionContext();
  // console.log(totalEmissions)

    return(
      
        <div>
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
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <p>Welcome back userName</p>
          </Grid>

          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <p>Location</p>
          </Grid>

          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <p>Your current total carbon emission</p>
            <p> {totalOffset} </p>

          </Grid>

          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <p>Compared to average</p>
            {/* <p> {totalEmissions} </p> */}
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
              graph 
            {/* add graph  */}
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* list of pledges you can take */}
            <Pledges />
          </Grid>

          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* Leardboard*/}
            leaderboard
          </Grid>

        </Grid>
      </Container>
    </Box>
  </>

            <footer>
            {/* <div style={{position:'fixed', bottom:0}}> */}
                <climate-clock />
            {/* </div> */}
            </footer>
        </div>
       
    )
}

export default Home;
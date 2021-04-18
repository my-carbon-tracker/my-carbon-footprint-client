import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from '../images/earth.png';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 10, 15),
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroungSize: "cover",
    backgroundAttachment: "fixed",
  },
  heroButtons: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  spacing: {
    backgroundColor: "black"
  }
}));

export default function MainPage() {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.heroContent}>
          <Container maxWidth="lg" >
            <Typography component="h1" variant="h2" align="center" color="white" gutterBottom>
              My Carbon Footprint
            </Typography>
            <Typography spacing= "10px">
            What is carbon footprint?
            Carbon footprint is the amount of carbon dioxide emissions directly or indirectly is generated from a person's activity. 
            The average American produces 20 tons of CO2—three times higher than the world average. Here's your chance to put some of that carbon back in the ground.
            </Typography>
            <div className={classes.heroButtons}> 
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="/quiz">
                    In Depth Analysis
                  </Button>
                  </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" href="/carbon-estimation">
                    Assestment
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" href="/login">
                    Login
                  </Button>
                  </Grid>
                  <Grid item>
                  <Button variant="contained" color="primary" href="/register">
                    Signup 
                  </Button>
                  </Grid>
              </Grid>
              </div>
          </Container>
    </div> 
    <div className={classes.spacing}>
      <Typography component="h1" variant="h2" align="center" gutterBottom style= {{color: "white"}}>
         Our Mission
      </Typography>
      <Container style= {{color:"white", wordSpacing: 3, marginTop: 8}} >
        The Climate Clock shows two numbers. The first, in red, is our deadline, the time we have left to take decisive action to keep warming under the 1.5°C threshold, 
        a count down of how long it will take, at current rates of emissions, to burn through our carbon budget. 
        The second number, in green, is the growing % of the world’s energy currently supplied from renewable sources. 
        Our lifeline. The goal is to get our lifeline to 100% before our deadline reaches 0.
      </Container>
      <Container style= {{color:"white", wordSpacing: 3, marginTop: 8}}>
      Founded with the mission of helping us reach our lifeline before the dealine by showing that there is great potential for the collective actions of many individuals worldwide 
      to reduce global warming by making changes in their daily and annual activities.
      </Container>
      </div>
        <footer>
           <climate-clock />
        </footer>
    </div>
  );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Image from '../images/earthLarge.jpeg'

// const styles = {
//   paperContainer: {
//     backgroundImage: `url(${Image})`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center center",
//     backgroundSize: "cover",
//     backgroundAttachment: "fixed",
//     maxHeight: 'lg',
//     maxWidth: 'lg',
//   }
// };

const useStyles = makeStyles((theme) => ({
  
  heroContent: {
    padding: theme.spacing(8, 0, 15),
    // maxWidth: 'lg',
    // maxHeight: 'lg',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    // backgroungSize: "cover",
    backgroundAttachment: "fixed",
    height: "100vh",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function MainPage() {
  const classes = useStyles();
  
  return (
    <Paper>
        <div className={classes.heroContent}>
          <Container maxWidth="lg" >
            <Typography component="h1" variant="h2" align="center" color="white" gutterBottom>
              My Carbon Footprint
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
          <footer>
     <climate-clock />
    </footer>
    </Paper>
  );
}
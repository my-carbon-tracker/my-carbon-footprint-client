import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({

  heroContent: {
    // backgroundColor:
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));
export default function Quizzes() {
  const classes = useStyles();

  return (
     <React.Fragment>
      <CssBaseline />

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Track your carbon footprint
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            What categories do you want to include into the calculations of your carbon footprint?
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="/food-quiz">
                    Food
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" href="/transportation-quiz">
                    Transportation
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" href="/electricity-quiz">
                    Electricity
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" href="/shopping-quiz">
                    Shopping
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" href="/carbon-estimation">
                    Compared to others near you
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
    </React.Fragment>
  );
}
import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footprint from "../images/Footprint.png";
import Flower from "../images/earthFlower.png";
import Carbon from "../images/carbon.png";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    align: "center",
    // paddingRight: theme.spacing(5),
    backgroundColor: "#B8CCC8",
  },
  cardMedia: {
    marginTop: "60%", 
    marginBottom: "60%",
    marginLeft: "60%",
    marginRight: "60%",
  },
}));

export default function HowItWorks() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
            How Does It Work? 
            </Typography>
          <Grid container spacing={2} align="center" >
            <Grid item xs={3} sm={3} md={4} >
                <img src={Footprint} height="50%" width="60%" />
                  <Typography gutterBottom variant="h5" component="h2">
                    Calculate your carbon footprint
                  </Typography>
            </Grid>

            <Grid item xs={3} sm={3} md={4}>
                <img src={Carbon} height="50%" width="60%" />
                  <Typography gutterBottom variant="h5" component="h2">
                    Offset your carbon footprint 
                  </Typography>
            </Grid>

            <Grid item xs={3} sm={3} md={4}>
                <img src={Flower} height="50%" width="60%" />
                  <Typography gutterBottom variant="h5" component="h2">
                    Reduce the impact of climate change
                  </Typography>
            </Grid>

          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

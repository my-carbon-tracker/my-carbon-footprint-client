import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Team from "./team";
import Logo from "../images/darkLogo.png";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "./footer";
import HowItWorks from "./howItWorks";
import { fade } from "@material-ui/core/styles/colorManipulator";
/* eslint-disable react/no-unescaped-entities */

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(13, 30, 13),
    backgroundImage: `url(https://res.cloudinary.com/dd6dpafkm/image/upload/v1619376958/landing_ucs1bn.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    background: "linear-gradient(#DFB593, #DF7B7D 50%)",
    color: "white",
  },
  heroButtons: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  spacing: {
    padding: theme.spacing(12, 5, 1),
    backgroundColor: "#2C5763",
  },
  btn: {
    opacity: 0.75,
    height: "7.0vh",
  },
  textBox: {
    backgroundColor: fade("#C4C4C4", 0.3),
    borderRadius: 20,
    padding: theme.spacing(10, 10, 10),
    color: "rgb(85,118,123)",
  },
}));

const theme = createMuiTheme({
  typography: {
    fontSize: 16,
    fontFamily: ["Istok Web"].join(","),
  },
});

export default function MainPage() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.heroContent}>
        <Container maxWidth="lg" className={classes.textBox}>
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            My Carbon Footprint
          </Typography>
          <ThemeProvider theme={theme}>
            <Typography spacing="10px">
              <strong>What's a Carbon Footprint? </strong>
              <div></div>
              <span>
                A carbon footprint is the measurement of carbon dioxide
                generated through the burning of fossil fuels as the result of
                human activities. The average American produces 20 tons of CO2,
                three times higher than the world's average. Here's your chance
                to put some of that carbon back in the ground.
              </span>
            </Typography>
          </ThemeProvider>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  href="/quiz"
                >
                  In Depth Analysis
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  href="/carbon-estimation"
                >
                  General Assestment
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  href="/login"
                >
                  Login
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  href="/register"
                >
                  Signup
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <div className={classes.spacing} align="center">
        <HowItWorks />
        <Typography
          component="h1"
          variant="h2"
          gutterBottom
          style={{
            color: "white",
            paddingTop: theme.spacing(5),
          }}
        >
          Our Mission
        </Typography>
        <img src={Logo} height="10%" width="10%" />
        <ThemeProvider theme={theme}>
          <Typography
            style={{
              padding: "3% 20% 5%",
              borderColor: "white",
            }}
          >
            <Container
              style={{
                color: "white",
                wordSpacing: 3,
                marginTop: 3,
                textAlign: "left",
              }}
            >
              Every little thing matters. What you eat, how you get to work,
              what you buy. No matter how small you think your choices are, it
              matters a lot not only to us but to our planet. We built this
              application with the intention of letting our users know exactly
              how much carbon emission is produced by the choices they make and
              keep track of it. We recognize the potential there is in our
              collective actions to make an impact and reduce global warming by
              making changes in our daily lives.
            </Container>
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
            style={{ color: "white" }}
          ></Typography>
        </ThemeProvider>
        <Container
          style={{
            color: "white",
            wordSpacing: 3,
            marginTop: 8,
            textAlign: "left",
          }}
        >
          <Team />
        </Container>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

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

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(13, 30, 13),
    backgroundImage: `url(https://res.cloudinary.com/dd6dpafkm/image/upload/v1618611186/ice_signin_gheuo2.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroungSize: "cover",
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
    backgroundColor: "black",
  },
  btn: {
    opacity: 0.75,
    height: "7.0vh",
  },
  textBox: {
    backgroundColor: "rgba(196,196,196,.3)",
    borderRadius: 20,
    padding: theme.spacing(10, 10, 10),
  },
}));

const theme = createMuiTheme({
  typography: {
    fontSize: 16,
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
              <strong>What is A Carbon Footprint? </strong>
              <div></div>
              <span>
                A carbon footprint is a form of measurement that expresses the
                amount of carbon dioxide generated through the burring of fossil
                fuels as the result of human activities. The average American
                produces 20 tons of CO2, three times higher than the World's
                average. Here's your chance to put some of that carbon back in
                the ground.
              </span>
            </Typography>
          </ThemeProvider>
          <div className={classes.heroButtons}>
            <Grid container spacing={3} justify="center">
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
        <Typography
          component="h1"
          variant="h2"
          gutterBottom
          style={{ color: "white" }}
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
              The Climate Clock shows two numbers. The first, in red, is our
              deadline, the time we have left to take decisive action to keep
              warming under the 1.5°C threshold, a count down of how long it
              will take, at our current rates of emissions, to burn through our
              carbon budget. The second number, in green, is the growing
              percentage of the world’s energy currently supplied by renewable
              sources, our lifeline. The goal is to get our lifeline to 100%
              before our deadline reaches 0.
            </Container>
            <Container
              style={{
                color: "white",
                wordSpacing: 3,
                marginTop: 8,
                textAlign: "left",
              }}
            >
              Founded by our mission of helping us reach our lifeline before the
              deadline by demonstrating that there exist great potential for the
              collective actions of individuals worldwide to make an impact and
              reduce global warming by making changes in our daily life
            </Container>
          </Typography>
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

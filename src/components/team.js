import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#FED7D9",
    padding: theme.spacing(5, 10, 5),
    margin: theme.spacing(0, 18, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    backgroundColor: "#FED7D9",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "90%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Team() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Meet the Team
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              “Saving the planet one code at a time” - Climate Developers
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://media-exp1.licdn.com/dms/image/C4D03AQFWxprSI6xqoA/profile-displayphoto-shrink_800_800/0/1607478405412?e=1624492800&v=beta&t=TL5GoJznT5YhPtvJzQOPI8cYa5waWwVCte-y16yCmdM"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jaylene Salas
                  </Typography>
                  <Typography>Product Manager, Software Engineer</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <p>
                      <a href="https://github.com/Jaylene-s">
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-128.png"
                          width="30%"
                          height="30%"
                        />
                      </a>
                    </p>
                    <p>
                      {" "}
                      <a href="https://www.linkedin.com/in/jaylene-salas/">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_LinkedIn-128.png"
                          width="30%"
                          height="30%"
                        />
                      </a>
                    </p>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://media-exp1.licdn.com/dms/image/C4D03AQHSmA20vn57Ww/profile-displayphoto-shrink_800_800/0/1618945816879?e=1624492800&v=beta&t=7R1v9UyuLB3lih9UiUqTjHRJ8oeG39jR4xrvZhnAL0A"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ebony Brown
                  </Typography>
                  <Typography>Scrum Master, Software Engineer</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <p>
                      <a href="https://github.com/e-mbrown">
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-128.png"
                          width="30%"
                          height="30%"
                        />
                      </a>
                    </p>
                    <p>
                      {" "}
                      <a href="https://www.linkedin.com/in/ebony-brown-884b331ab/">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_LinkedIn-128.png"
                          width="30%"
                          height="30%"
                        />
                      </a>
                    </p>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://media-exp1.licdn.com/dms/image/C4D03AQGmoNPWJh9rBA/profile-displayphoto-shrink_800_800/0/1605232883544?e=1624492800&v=beta&t=R5TmqxSPl02jD8zhF-Ir0wDM3ut9wbuS2TyrX-xnC-c"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Melinda Cardenas
                  </Typography>
                  <Typography>Software Engineer</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <p>
                      <a href="https://github.com/MelindaCardenas">
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-128.png"
                          width="30%"
                          height="30%"
                        />
                      </a>
                    </p>
                    <p>
                      {" "}
                      <a href="https://www.linkedin.com/in/melinda-cardenas/">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_LinkedIn-128.png"
                          width="30%"
                          height="30%"
                        />
                      </a>
                    </p>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://media-exp1.licdn.com/dms/image/C4D03AQEC252ACEElAQ/profile-displayphoto-shrink_800_800/0/1549417066822?e=1624492800&v=beta&t=0SApiv2k-hWujD-u-C1HTtj98BBPAO3BtapebcA948Y"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Luis Toro
                  </Typography>
                  <Typography>Software Engineer</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <p>
                      <a href="https://github.com/LuisToro-v">
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-128.png"
                          width="30%"
                          height="30%"
                        />
                      </a>
                    </p>
                    <p>
                      {" "}
                      <a href="https://www.linkedin.com/in/luis-toro-bbb464159/">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_LinkedIn-128.png"
                          width="30%"
                          height="30%"
                        />
                      </a>
                    </p>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

import { getArticles } from "./getArticles";
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Articles() {
  const classes = useStyles();
  
  const [firstHeadline, setFirstHeadline] = React.useState();
  const [firstAbstract, setFirstAbstract] = React.useState();
  const [firstUrl, setFirstUrl] = React.useState();
  const [firstImage, setFirstImage] = React.useState();
  const [secondHeadline, setSecondHeadline] = React.useState();
  const [secondAbstract, setSecondAbstract] = React.useState();
  const [secondUrl, setSecondUrl] = React.useState();
  const [secondImage, setSecondImage] = React.useState();
  const [thirdHeadline, setThirdHeadline] = React.useState();
  const [thirdAbstract, setThirdAbstract] = React.useState();
  const [thirdUrl, setThirdUrl] = React.useState();
  const [thirdImage, setThirdImage] = React.useState();
  const [fourthHeadline, setFourthHeadline] = React.useState();
  const [fourthAbstract, setFourthAbstract] = React.useState();
  const [fourthUrl, setFourthUrl] = React.useState();
  const [fourthImage, setFourthImage] = React.useState();
  const [fifthHeadline, setFifthHeadline] = React.useState();
  const [fifthAbstract, setFifthAbstract] = React.useState();
  const [fifthUrl, setFifthUrl] = React.useState();
  const [fifthImage, setFifthImage] = React.useState();
  const [sixHeadline, setSixHeadline] = React.useState();
  const [sixAbstract, setSixAbstract] = React.useState();
  const [sixUrl, setSixUrl] = React.useState();
  const [sixImage, setSixImage] = React.useState();

  React.useEffect(() => { 
    let mounted = true;
    getArticles()
    .then((article) => {
      if(mounted) {
      setFirstAbstract(article.response.docs[0].abstract);
      setFirstHeadline(article.response.docs[0].headline.main);
      setFirstUrl(article.response.docs[0].web_url);
      let tag = `https://static01.nyt.com/`
      setFirstImage(tag+article.response.docs[0].multimedia[0].url);
      // console.log(article.response.docs) 
      setSecondAbstract(article.response.docs[1].abstract);
      setSecondHeadline(article.response.docs[1].headline.main);
      setSecondUrl(article.response.docs[1].web_url);
      setSecondImage(tag+article.response.docs[1].multimedia[0].url);
      setThirdAbstract(article.response.docs[2].abstract);
      setThirdHeadline(article.response.docs[2].headline.main);
      setThirdUrl(article.response.docs[2].web_url);
      setThirdImage(tag+article.response.docs[2].multimedia[0].url);
      setFourthAbstract(article.response.docs[4].abstract);
      setFourthHeadline(article.response.docs[4].headline.main);
      setFourthUrl(article.response.docs[4].web_url);
      setFourthImage(tag+article.response.docs[4].multimedia[0].url);
      setFifthAbstract(article.response.docs[5].abstract);
      setFifthHeadline(article.response.docs[5].headline.main);
      setFifthUrl(article.response.docs[5].web_url);
      setFifthImage(tag+article.response.docs[5].multimedia[0].url);
      setSixAbstract(article.response.docs[6].abstract);
      setSixHeadline(article.response.docs[6].headline.main);
      setSixUrl(article.response.docs[6].web_url);
      setSixImage(tag+article.response.docs[6].multimedia[0].url);
      }
    })
    return () => mounted = false;
  }, [])
  //   fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=climate&api-key=6OkBeVyUZAriSTuQI8y3Ls8ZAJJhTVGw`,{
  //     method:'GET',
  //     headers:{
  //       "Accept": "application/json",
  //     }
  //  })
  //   .then(response => response.json())
    
    // .catch((err) => console.log("error"))

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Climate News
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here some of the top stories in climate change right now
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image={firstImage} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {firstHeadline}
                    </Typography>
                    <Typography>
                      {firstAbstract}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <p> <a href={firstUrl} >View Article</a></p>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image={secondImage} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {secondHeadline}
                    </Typography>
                    <Typography>
                      {secondAbstract}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <p> <a href={secondUrl} >View Article</a></p>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image={thirdImage} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {thirdHeadline}
                    </Typography>
                    <Typography>
                      {thirdAbstract}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <p> <a href={thirdUrl} >View Article</a></p>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image={fourthImage} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {fourthHeadline}
                    </Typography>
                    <Typography>
                      {fourthAbstract}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <p> <a href={fourthUrl} >View Article</a></p>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image={fifthImage} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {fifthHeadline}
                    </Typography>
                    <Typography>
                      {fifthAbstract}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <p> <a href={fifthUrl} >View Article</a></p>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image={sixImage} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {sixHeadline}
                    </Typography>
                    <Typography>
                      {sixAbstract}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <p> <a href={sixUrl} >View Article</a></p>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer>
        <climate-clock />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
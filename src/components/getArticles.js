import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
 
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ClimateNews() {
    const classes = useStyles();

    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=climate&api-key=6OkBeVyUZAriSTuQI8y3Ls8ZAJJhTVGw`)
    .then(response => response.json())
    .then((article) => {
        const stories = article.response.docs;
        return stories.map(function (story){
          const div = document.getElementById('climate-news');
          const p = document.createElement("p"); 
          const a = document.createElement("a");
  
          const text = document.createTextNode(story.headline.main);
          a.setAttribute("href", `${story.web_url}`);
          a.setAttribute("target", "_blank");
          a.appendChild(text)
          p.appendChild(a);
          div.appendChild(p);
          console.log(text)
        })
    //   let story = article.response.docs.map((stories) => {
    //       return {
    //         headline: stories.headline,
    //         abstract: stories.abstract,
    //         url: stories.web_url,
    //         image: stories.multimedia["url"]

    //       }
    //   });
    //     console.log(story)
    })
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

        <div id="climate-news">
        </div>
      </main>
    </React.Fragment>
    )
}
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Grid} from '@material-ui/core'
import Form from './Form'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: "25%",
      maxWidth: "50%",
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    center: {
        direction: 'column',
        alignItems: 'center',
    }
  });

  export default function Login(props){
      const classes = useStyles();
      return(
        <div className="login">
            <Grid container direction='column' alignItems="center" justify="center">
                <Grid item>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color='textSecondary' gutterBottom>
                                Login
                            </Typography>
                            <Form setToken={props.setToken}/>
                        </CardContent>
                    </Card>
                </Grid>
                
            </Grid>
            
        </div>
      )
  }
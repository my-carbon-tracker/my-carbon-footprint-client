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

  export default function SignUp(props){
    const classes = useStyles();
    
    const register = async (name,pass) =>{
        const url = `http://localhost:3000/auth/signup`
        const body = {
            username: name,
            password: pass,
            emission: 5000 //pass prop from quiz?
        }
        const response = await fetch(url,{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        console.log(data)
    }
      return(
        <div className="login">
            <Grid container direction='column' alignItems="center" justify="center">
                <Grid item>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color='textSecondary' gutterBottom>
                                Login
                            </Typography>
                            <Form onSubmit={register}/>
                        </CardContent>
                    </Card>
                </Grid>
                
            </Grid>
            
        </div>
      )
  }
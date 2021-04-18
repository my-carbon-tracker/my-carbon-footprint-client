import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Box} from '@material-ui/core'
import Form from './Form'
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      height: '100vh',
      backgroundImage:"url(https://res.cloudinary.com/dd6dpafkm/image/upload/v1618611186/ice_signin_gheuo2.jpg)",
      backgroundSize: "cover",
    },
    card: {
      display:'flex',
      flexDirection: 'column',
      minWidth:'100%',
      opacity: '.75'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 40,
      textAlign: "Center",
      marginTop:'4px',
    },
    pos: {
      marginBottom: 12,
    },
    p:{
      textAlign: "Center",
      color: "#dd2c00",
    }
  });

  export default function Login(props){
    const classes = useStyles();
    const [prompt, setPrompt] = useState(false);
    const login = async (name,pass) =>{
        const url = `http://localhost:3000/auth/login`
        const body = {
            username: name,
            password: pass
        }
        const response = await fetch(url,{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        if(response.status !== 200){
          // alert('Incorrect login');
          setPrompt(true);
        }
        else{
          console.log(data)
          props.setToken(data.token)
          localStorage.setItem('token', data.token)
          window.location.replace("/home")
      }
    }

      return(
        <div className={classes.root}>
          <Box className={classes.root}
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            p={1} 
            m={1}
          >
            <Box border={2} borderRadius={8} borderColor="white">
              <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color='textSecondary' gutterBottom>
                        Login
                    </Typography>
                    {prompt?(<p className={classes.p}>Username/password match doesn't exist</p>):(null)
                    }
                    <Form onSubmit={login}/>
                </CardContent>
            </Card>
            </Box>
          </Box>
        </div>
      )
  }
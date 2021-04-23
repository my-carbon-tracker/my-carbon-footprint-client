import { React, useState } from 'react';
import { Box } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      opacity: '1'
    },
    button: {
        margin: theme.spacing(1),
      },
  },
  text: {
    textAlign: "center",
    }

}));

export default function Form(props) {
    const classes = useStyles();
    const [nameInput, setName] = useState('')
    const [passInput, setPass] = useState('')

    const submitForm = (e) =>{
        e.preventDefault()
        if(nameInput && passInput){
            console.log('here')
            props.onSubmit(nameInput, passInput)
        }else{
            console.log('Add errors on input that is missing')
        }
        e.target.reset()
    }

    return (
        <form className={classes.root} onSubmit={(e)=>submitForm(e)} noValidate autoComplete="off">
            <div>
                <Box m={1} className={classes.text} >
                    <TextField variant="outlined" label="Username" onChange={(e) =>setName(e.target.value)} />
                </Box>
                <Box className={classes.text} m={1}>
                    <TextField type="password" variant="outlined" label="Password" onChange={(e) =>setPass(e.target.value)} />
                </Box>
                <Box className={classes.text} mt={1} >
                    <Button variant='contained' color='primary' type='submit' >Submit</Button>
                </Box>
                
            </div>
        </form>
    )
}
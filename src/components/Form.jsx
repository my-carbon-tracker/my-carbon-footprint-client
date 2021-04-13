import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    button: {
        margin: theme.spacing(1),
      },
  },
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
                <TextField placeholder='Username' onChange={(e) =>setName(e.target.value)} />
                <TextField placeholder='Password' onChange={(e) =>setPass(e.target.value)} />
                <Button variant='contained' color='primary' type='submit' >Submit</Button>
            </div>
        </form>
    )
}
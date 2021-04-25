import {Button} from '@material-ui/core';
import {useState, useEffect} from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles(theme=>({
    root:{
        margin:theme.spacing(0.5)
    },
    label:{
        textTransform:'none'
    },
    btn: {
        opacity: 0.75,
        height: "7.0vh",
    },
    btnActive: {
        opacity: 1,
        background:'#111e75', 
        height: "7.0vh",      
    }
}))

const theme = createMuiTheme({
    palette:{
        primary: {
          main: '#2E4089',
        },
        secondary: {
            main:'#000630'
        }
    },
    typography: {
      fontSize: 16,
    },
});

export default function PrimaryButton(props){
    const classes = useStyles();
    const {text,size,selected,variant,onClick,...other} = props;
    const [style, setStyle] = useState(classes.btn);
    let color;
    
    useEffect(()=>{
        if(selected===true){
            //color='secondary'
            setStyle(classes.btnActive)
        }
        else{
            setStyle(classes.btn)
        }
    },[selected])

    return (
        <ThemeProvider theme={theme}>
            <Button 
                size={size||"large"}
                color={color||"primary"}
                variant={variant||"contained"}
                onClick={onClick}
                className={style}
                {...other}
                classes={{root:classes.root,label:classes.label}}
                >
                {text}
            </Button>
        </ThemeProvider>
    )
}
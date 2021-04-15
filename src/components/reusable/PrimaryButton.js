import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme=>({
    root:{
        margin:theme.spacing(0.5)
    },
    label:{
        textTransform:'none'
    }
}))

export default function PrimaryButton(props){
    const {text,size,selected,variant,onClick,...other} = props
    let color;
    const classes = useStyles();
    if(selected===true){
        color='secondary'
    }
    return (
        <Button 
            size={size||"large"}
            color={color||"primary"}
            variant={variant||"contained"}
            onClick={onClick}
            {...other}
            classes={{root:classes.root,label:classes.label}}
            >
            {text}
        </Button>
    )
}
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Image from '../images/pinkLogo.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign:'center',
    },
  }));

function Header(props){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleLogout = () =>{
        window.localStorage.clear();
        props.setToken('');
      }
    return(
        <div className="">
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <div>
                    <Button color="inherit" href="/home" >Home</Button></div>
                    <div><Button color="inherit" href="/quiz">Quizzes</Button></div>
                    <div><Button color="inherit" href="/carbon-estimation">Compare Emissions</Button></div>
                    <div><Button color="inherit" href="/carbon-map">Carbon Map</Button></div>
                    <Button color="inherit" href="/climate-news">Climate News</Button>
                    </Menu>
                    </IconButton> 
                    <Typography> 
                    <p><a href="/"><img src={Image} height="50" width="50" align="center" /></a></p>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        My Carbon Tracker
                    </Typography>
                    { (props.userToken === '') ?
                      <Button color="inherit" href="/login">
                        Login
                      </Button>
                    :
                      <Button color="inherit" onClick = {handleLogout} href = "/">
                        Logout
                      </Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
import earthIcon from '../images/earth.svg'
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

function Header(){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return(
        <div className="">
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <div>
                    <Button color="inherit" href="/home" >Home</Button></div>
                    <div><Button color="inherit" href="/">Quizzes</Button></div>

                    <Button color="inherit" href="/news">Climate News</Button>
                    {/* <Button color="inherit" href="/login">Logout</Button>
                    <Button color="inherit" href="/register">Sign Up</Button> */}
                    </Menu>
                        {/* <MenuIcon id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}/> */}
                    </IconButton> 
                    <Typography variant="h6" className={classes.title}>
                        My Carbon Tracker
                    </Typography>
                    {/* {<img className="" src={earthIcon} style={{width:25, position:'relative'}}/>} */}
                    <Button color="inherit" href="/login">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
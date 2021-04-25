import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import Image from "../images/darkLogo.png";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    paddingLeft: theme.spacing(2),
    fontSize: '26px',
  },
}));
/* eslint-disable react/prop-types */
function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    window.localStorage.clear();
    props.setToken("");
  };
  return (
    <div className="" >
      <AppBar position="static" >
        <Toolbar style={{ color: 'inherit'}}>
          <IconButton
            onClick={handleClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Link href="/home">
            <MenuItem color="inherit" >
              Home
            </MenuItem>
            </Link>
            <Link href="/quiz">
            <MenuItem color="inherit">
              Quizzes
            </MenuItem>
            </Link>      
            <Link href="/carbon-estimation">
            <MenuItem color="inherit">
              Compare Emissions
            </MenuItem>
            </Link>
            <Link href="/carbon-map">
            <MenuItem color="inherit">
              Carbon Map
            </MenuItem>
            </Link>
            <Link href="/climate-news">
            <MenuItem color="inherit">
              Climate News
            </MenuItem>
            </Link>
          </Menu>

          <Typography>
            <p>
              <a href="/">
                <img src={Image} height="40" width="40"/>
              </a>
            </p>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            My Carbon Tracker
          </Typography>
          {props.userToken === "" ? (
            <Button color="inherit" href="/login">
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogout} href="/">
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>

  );
}

export default Header;

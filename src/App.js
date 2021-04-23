import './App.css';
import { useState, useMemo, useContext } from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import FootprintQuiz from "./components/footprint-quiz/footprint-quiz";
import Login from "./components/Login"
import Signup from "./components/Signup"
import GetUserInfo from "./components/estimation-quiz/carbonEstimation";
import Header from "./components/Header";
import MainPage from "./components/main";
import CssBaseline from "@material-ui/core/CssBaseline";
import FoodEmission from './components/Emissions/foodTable'
import MapBox from './components/footprint-quiz/transportation/map'
import { createMuiTheme, ThemeProvider, MuiThemeProvider } from "@material-ui/core/styles";
import { OffsetProvider } from './contexts/pledgeContext'
import Articles from "./components/articles"
import { AverageEmissionProvider } from './contexts/averageEmissionContext';
import { LocationProvider } from './contexts/locationContext';
import { EmissionProvider } from './contexts/emissionContext';
import { UserNameProvider } from './contexts/usernameContext';
import GetMap from './components/map';

const theme = createMuiTheme({
  //#DFB593 dark pinkish
  palette:{
    primary: {
      main: '#DFB593',
      contrastText: "#2E4089"
      //mainGradient: "linear-gradient(#157A42,#25DB77)"
      //background: 'linear gradient(#157A42,#25DB77)',
    },
    secondary: {
      main: '#96C3BE',
      contrastText: "#2E4089"
    },
    background: {default:'#DFB593'}
  },
  overrides:{
    MuiOutlinedInput: {
      root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#DF7C78",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: "#DF7C78"
          }
        },
        "&$focused $notchedOutline": {
          borderColor: "#DF7C78",
          borderWidth: 1
        }
      }
    },
    MuiFormLabel: {
      root: {
         "&$focused": {
            color: "#2E4089"
         },
         color: "#2E4089"
      }
    },
    MuiMenuItem: { // For ListItem, change this to MuiListItem
      root: {
        "&$selected": {       // this is to refer to the prop provided by M-UI
          backgroundColor: '#83bcc4', // updated backgroundColor
        },
        "&:hover":{
          backgroundColor: '#83bcc43',
        },
        color:"#2E4089"
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#96C3BE'
      }
    }
  }
})
//style={{ background: theme.palette.primary.mainGradient }}

function App() {
  let token = localStorage.getItem('token') || ''
  const [userToken, setToken] = useState(token);
  let urlPath = window.location.pathname;
  // console.log(pathArray)

  return (
    <BrowserRouter>
    <Route exact path="/">
      <MainPage />
    </Route>
    <Route path='/login'>
      <Login setToken = {setToken}/>
    </Route>
    <Route path='/register'>
      <Signup setToken = {setToken}/>
    </Route>
      <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      
      {urlPath !== '/' && urlPath !== '/login' && urlPath !== '/register' ? (<Header setToken = {setToken} userToken = {userToken}/> ) : (null)}
      
        <Switch>
        <OffsetProvider>
          <AverageEmissionProvider>
            <LocationProvider>
              <EmissionProvider>
                <UserNameProvider>
          <Route exact path="/home" component={Home}>
            <Home token={token}/>
          </Route>
          <Route path="/carbon-estimation">
            <GetUserInfo token={token}/>
          </Route>
          <Route path="/quiz">
            <FootprintQuiz token={token}/>
          </Route>
          <Route path="/climate-news">
            <Articles />
          </Route>
          <Route path="/emissions">
            <FoodEmission token={token}/>
          </Route>
          <Route path="/map">
            <MapBox />
          </Route>
          </UserNameProvider>
          </EmissionProvider>
          </LocationProvider>
          </AverageEmissionProvider>
          </OffsetProvider>
        </Switch>  
    </MuiThemeProvider>
    </BrowserRouter> 
  );
}

export default App;

import './App.css';
import { useState, useMemo, useContext } from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import FootprintQuiz from "./components/footprint-quiz/footprint-quiz";
import Login from "./components/Login"
import Signup from "./components/Signup"
import GetUserInfo from "./components/carbonEstimation";
import Header from "./components/Header";
import MainPage from "./components/main";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider, MuiThemeProvider } from "@material-ui/core/styles";
// import { AverageEmissionProvider } from "./contexts/averageEmissionContext";
// import { OffsetProvider } from "./components/pledges";
import { OffsetProvider } from './contexts/pledgeContext'
// import { AverageEmissionProvider } from "./contexts/averageEmissionContext";
import Pledges from './components/pledges';
import ClimateNews from "./components/getArticles";

const theme = createMuiTheme({
  
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
    background: {default:'#41B898'}
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
      
      {urlPath !== '/' && urlPath !== '/login' && urlPath !== '/register' ? (<Header /> ) : (null)}
      
        <Switch>
        <OffsetProvider>
          <Route exact path="/home" component={Home}>
            <Home token={token}/>
          </Route>
          <Route path="/carbon-estimation">
          <GetUserInfo />
          </Route>
          <Route path="/quiz">
            <FootprintQuiz token={token}/>
          </Route>
          <Route path="/news">
            <ClimateNews />
          </Route>
          </OffsetProvider>
        </Switch>  
    </MuiThemeProvider>
    </BrowserRouter> 
  );
}

export default App;

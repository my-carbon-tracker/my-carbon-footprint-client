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
import FoodEmission from './components/Emissions/foodTable'
import { createMuiTheme, ThemeProvider, MuiThemeProvider } from "@material-ui/core/styles";
import { OffsetProvider } from './contexts/pledgeContext'
// import ClimateNews from "./components/getArticles";
import Articles from "./components/articles"
import { AverageEmissionProvider } from './contexts/averageEmissionContext';
import { LocationProvider } from './contexts/locationContext';
import { EmissionProvider } from './contexts/emissionContext';
import { UserNameProvider } from './contexts/usernameContext';

const theme = createMuiTheme({
  
  palette:{
    primary: {
      main: '#41B898',
      contrastText: "#fff"
      //mainGradient: "linear-gradient(#157A42,#25DB77)"
      //background: 'linear gradient(#157A42,#25DB77)',
    },
    secondary: {
      main: '#2E4089',
      contrastText: "#fff"
    },
    background: {default:'#41B898'}
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

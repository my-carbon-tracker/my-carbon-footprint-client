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

const theme = createMuiTheme({
  
  palette:{
    primary: {
      main: '#000000',
      //mainGradient: "linear-gradient(#157A42,#25DB77)"
      //background: 'linear gradient(#157A42,#25DB77)',
    },
    secondary: {
      main: '#25DB77'
    },
    background: {default:'#157A42'}
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
    <Route path="/main">
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
      
      {urlPath !== '/main' && urlPath !== '/login' && urlPath !== '/register' ? (<Header /> ) : (null)}
      
        <Switch>
        <OffsetProvider>
          <Route exact path="/home" component={Home}>
            <Home />
          </Route>
          <Route path="/carbon-estimation">
          <GetUserInfo />
          </Route>
          <Route path="/quiz">
            <FootprintQuiz token={token}/>
          </Route>
          </OffsetProvider>
        </Switch>  
    </MuiThemeProvider>
    </BrowserRouter> 
  );
}

export default App;

import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import FootprintQuiz from "./components/footprint-quiz";
//import GetUserInfo from "./carbonEstimation";
import Header from "./components/Header"
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  
  palette:{
    primary: {
      main: '#000000',
      //mainGradient: "linear-gradient(#157A42,#25DB77)"
      //background: 'linear gradient(#157A42,#25DB77)',
    },
    background: {default:'#157A42'}
    
  }
})
//style={{ background: theme.palette.primary.mainGradient }}
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quiz">
            <FootprintQuiz />
          </Route>
          <Route path="estimate-quize">
          <GetUserInfo />
          </Route>
        </Switch>  
      </BrowserRouter>    
    </MuiThemeProvider>
  );
}

export default App;

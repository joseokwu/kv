import "./App.css";
//import AppRoute from "./AppRouter";
import { useState } from "react";
import {Providers} from './context/provider';
import { Alert } from "./Startupcomponents/index";
import { BrowserRouter as Router } from 'react-router-dom';


import {AppRouter} from './routes/AppRouter';

function App() {
 // const [alert, setAlert] = useState({});
  return (
    
    <Router>
    <Providers>
      <AppRouter />
      <Alert />
    </Providers>
    </Router>
  );
}

export default App;

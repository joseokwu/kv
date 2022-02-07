import "./App.css";
//import AppRoute from "./AppRouter";
import { useState } from "react";
import { Alert } from "./Startupcomponents/index";
import { BrowserRouter as Router } from 'react-router-dom';
import {AppRouter} from './routes/AppRouter';

function App() {

  return (
    
    <Router>
      <AppRouter />
      <Alert />
    </Router>
  );
}

export default App;

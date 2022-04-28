import "./App.css";
//import AppRoute from "./AppRouter";

import { Alert } from "./Startupcomponents/index";
import { BrowserRouter as Router } from 'react-router-dom';
import {AppRouter} from './routes/AppRouter';
import { Toaster } from 'react-hot-toast';


// const AppRouter = lazy(()=> import('./routes/AppRouter'))

function App() {

  return (
    
    <Router>

      <AppRouter />
      <Alert />
	 
      <Toaster
						position='top-center'
						toastOptions={{
							className: '',
							style: {
								margin: '30px',
								minWidth: '370px',
								display: 'inline-flex',
								fontSize: '18px',
								zIndex: 999999,
							},
							duration: 4000,
						}}
					/>
    </Router>
  );
}

export default App;

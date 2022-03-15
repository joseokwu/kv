import React , { useEffect} from 'react';
import {Route, Switch , useHistory} from 'react-router-dom';
import routes from './routes';
import { ProtectedRoute }  from './ProtectedRoute'
import { useAuth } from '../hooks/useAuth';
import { getToken , getLocationHistory } from '../utils/helpers.js';
import { LoadingIcon } from './../components/Loading/Loading';

export  function AppRouter(props){
    const { userProfile, stateAuth : { loading , authenticated }} = useAuth();
    const history = useHistory();
    useEffect(()=>{
        const getP = async () => {
			if (getToken()) {
			await userProfile();
				if (getLocationHistory()) {
                    history.push(getLocationHistory());
					sessionStorage.removeItem('user:redirect:location')
				}
			}
          
            
		};
		getP();    
    },[userProfile, authenticated, history])  

    if(loading){
        return <LoadingIcon fullscreen />
    }else{
        return (
            <Switch>
    
                   {
                    routes.map((route)=>{  
                        return route.protected ? (
                            <ProtectedRoute
                                key={route.name}
                                {...route}
                                { ...props }
                             />
                        ) : (
                          <Route key={route.name} {...route} {...props}  />
                        )
                    })
                }
    
    
            </Switch>
        )
    }
  
}

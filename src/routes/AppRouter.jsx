import React , { useEffect} from 'react';
import {Route, Switch , useHistory} from 'react-router-dom';
import routes from './routes';
import { ProtectedRoute }  from './ProtectedRoute'
import { useAuth } from '../hooks/useAuth';
import { getToken , getLocationHistory , getRole } from '../utils/helpers.js';
import { LoadingIcon } from './../components/Loading/Loading';
import { useActivity } from '../hooks/useBusiness';

export  function AppRouter(props){
    const { userProfile, stateAuth : { loading , authenticated }} = useAuth();
    const  { state } = useActivity();
    const history = useHistory();
    useEffect(()=>{
        console.log(loading)
        const getP = async () => {
			if (getToken()) {
                const userRole = getRole();
               // console.log(userRole)
			await userProfile(userRole && userRole);
				if (getLocationHistory()) {
                    history.push(getLocationHistory());
					sessionStorage.removeItem('user:redirect:location')
				}
			}       
		};
		getP();    
    },[userProfile, authenticated, history , state.path])  

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

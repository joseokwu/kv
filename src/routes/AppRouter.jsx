import React , { useEffect} from 'react';
import {Route, Switch , useHistory} from 'react-router-dom';
import routes from './routes';
import { ProtectedRoute }  from './ProtectedRoute'
import { useAuth } from '../hooks/useAuth';
import { getToken , getLocationHistory , getRole } from '../utils/helpers.js';
import { LoadingIcon } from './../components/Loading/Loading';
import { useActivity } from '../hooks/useBusiness';

export  function AppRouter(props){
    const { userProfile, stateAuth : { loading , authenticated , completedRegistration, roles }} = useAuth();
    const  { state } = useActivity();
    const history = useHistory();
    useEffect(()=>{
      
        const getP = async () => {
			if (getToken()) {
                const userRole = getRole();
               // console.log(userRole)
              await userProfile(userRole && userRole);
               
            console.log(roles)
				if (getLocationHistory()){
                    console.log('problem')
                    history.push(getLocationHistory());
					sessionStorage.removeItem('user:redirect:location')
				}
			}       
		};
		getP();    
    },[userProfile, authenticated, history ])  

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

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from './routes';
import { ProtectedRoute }  from './ProtectedRoute'
import { useAuth } from '../hooks/useAuth';


export  function AppRouter(props){
    const {stateAuth} = useAuth();
   

    console.log(stateAuth)
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

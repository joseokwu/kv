import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from './routes';
import { ProtectedRoute }  from './ProtectedRoute'


export  function AppRouter(props){

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

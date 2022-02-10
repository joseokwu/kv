import React, {useEffect, useState} from 'react';
import { Route, useHistory} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { setLocationHistory } from '../utils/helpers';


export  const ProtectedRoute = ({roles, ...props})=>{
    const history = useHistory();
    const {stateAuth} = useAuth();
   
    useEffect(()=>{
        if(stateAuth.authenticated === false && !stateAuth.roles.includes(props.type)){

            setLocationHistory(history.location.pathname)
            history.push('/')
        }
    }, [history, roles, stateAuth.authenticated ]);

    return <Route {...props} />
}
  



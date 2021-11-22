import React, {useEffect, useState} from 'react';
import { Route, useHistory} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { setLocationHistory } from '../utils/helpers';


export  const ProtectedRoute = ({roles, ...props})=>{
    const history = useHistory();
    const {state} = useAuth();
    console.log(state.authenticated)
    useEffect(()=>{
        if(state.authenticated === false){

            setLocationHistory(history.location.pathname)
            history.push('/')
        }
    }, [history, roles, state.authenticated ]);

    return <Route {...props} />
}
  



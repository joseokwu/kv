import React, {useEffect, useState} from 'react';
import { Route, useHistory} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { setLocationHistory } from '../utils/helpers';

import { LoadingIcon } from '../components/Loading';


export  const ProtectedRoute = ({roles, ...props})=>{
    const history = useHistory();
    const {stateAuth} = useAuth();
   
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        if(stateAuth.authenticated === false){

            setLocationHistory(history.location.pathname)
            history.push('/')
        }
        if(!stateAuth.roles.includes(props.type)){
            history.push('/') 
        }

         setLoading(false);

    }, [history, roles, stateAuth.authenticated ]);

    return  loading ? <LoadingIcon fullscreen={true} /> : <Route {...props} /> 
}
  



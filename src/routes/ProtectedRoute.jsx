import React, {useEffect, useState} from 'react';
import { Route, useHistory} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { setLocationHistory } from '../utils/helpers';

import { LoadingIcon } from '../components/Loading';


export  const ProtectedRoute = ({ ...props})=>{
    const history = useHistory();
    const {stateAuth} = useAuth();
   
    const [loading, setLoading] = useState(true);

    useEffect(()=>{ 
        setLoading(true);
        if(!stateAuth.authenticated && !stateAuth.roles.includes(props.type)){
            // console.log(history.location.pathname)
            setLocationHistory(history.location.pathname)
            history.push('/')

        }
        // if(!stateAuth.roles.includes(props.type)){

        //     history.push('/') 
        //     // setLocationHistory(history.location.pathname)
        //     console.log('e noh work')
        //     console.log(!stateAuth.roles.includes(props.type))
        // }

         setLoading(false);

    }, [history, stateAuth.roles, stateAuth.authenticated, props.type]);

    return  loading ? <LoadingIcon fullscreen={true} /> : <Route {...props} /> 
}
  



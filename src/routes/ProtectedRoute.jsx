import React, {useEffect, useState} from 'react';
import { Route, useHistory , Redirect} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useActivity } from '../hooks/useBusiness';
import { setLocationHistory , userType  } from '../utils/helpers';

import { LoadingIcon } from '../components/Loading';


export  const ProtectedRoute = ({ ...props})=>{
    const history = useHistory();
    const {stateAuth} = useAuth();
   

    const [loading, setLoading] = useState(true);
    //user:token
    useEffect(()=>{ 
       
        console.log(stateAuth.authenticated)
        if(!stateAuth.authenticated && !stateAuth.type.includes(props.type)){
            // console.log(history.location.pathname)
            setLocationHistory(history.location.pathname)
            history.push('/')

        }
        // if(!stateAuth.completedRegistration){
        //     console.log(history.location.pathname)
        // history.push(`/${getRole()}/registration`)  
        // }
        // if(!stateAuth.roles.includes(props.type)){

        //     history.push('/') 
        //     // setLocationHistory(history.location.pathname)
        //     console.log('e noh work')
        //     console.log(!stateAuth.roles.includes(props.type))
        // }

         

    }, [history, stateAuth.roles, stateAuth.authenticated, props.type]);

    return  <Route {...props} /> 
}
  



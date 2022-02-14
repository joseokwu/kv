import { useSelector, useDispatch } from 'react-redux';
import { registerUser, loginUser, getProfile  as profile } from '../store/actions/auth';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export const useAuth = () => {

const history = useHistory()

const dispatch = useDispatch();

const stateAuth = useSelector((state) => state.auth );

const register = async(values) =>{
 
    const res = await dispatch(registerUser(values));
        if(res?.success){
            history.push('/confirm/email')
        }
}

const newLogin = async (values) =>{

    const res = await  dispatch( loginUser(values));
        return res;
}

const userProfile = useCallback(async () =>{
    
        dispatch(await profile());

    }, [])


    return {
        stateAuth,
        register,
        newLogin ,
        userProfile
    };
}

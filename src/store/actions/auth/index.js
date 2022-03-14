import {AUTH_START, REGISTER_FAILED, REGISTER_SUCCESS,
    LOGIN_FAILED, LOGIN_SUCCESS, USER_PROFILE, USER_PROFILE_FAIL , 
    SET_SIGNUP_STATUS, GET_SIGNUP_STATUS , LOG_OUT
} from '../actions.types';
import { register, userLogin , profile, forgorPassword } from '../../../services';
import toast from 'react-hot-toast';
import { setAuthToken } from '../../../utils/helpers';


export const registerUser = async(value) => async(dispatch) =>{

    try{
        dispatch({
            type:AUTH_START
        })
        const res = await register(value);
        console.log(res);
        toast.success(res?.message);
        dispatch({
            type:REGISTER_SUCCESS  
        })

        return res;
    
    }catch(err){
        dispatch({
            type:REGISTER_FAILED
        })
    }
}

export const loginUser = async(value) => async(dispatch) =>{

    try{
        dispatch({
            type:AUTH_START
        })
        const res = await userLogin(value);
        setAuthToken(res?.token);
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res?.roles
        })
       
        return res;
    
    }catch(err){
        toast.error('Network Error')
        console.log('error')
        dispatch({
            type:LOGIN_FAILED
        })
    }
}

export const getProfile = async () => async(dispatch) =>{

    try{
        dispatch({
            type:AUTH_START
        })
        const res = await profile();
            
        dispatch({
            type:USER_PROFILE,
            payload: res
        })

    
    }catch(err){
        dispatch({
            type:USER_PROFILE_FAIL
        })
    }
}

export const changeStatus =  (value) => async(dispatch) =>{
    dispatch({
        type:SET_SIGNUP_STATUS,
        payload:value
    })
}

export const logout = () => dispatch =>{

    dispatch({
        type:LOG_OUT
    })
    localStorage.removeItem("user:token")
}
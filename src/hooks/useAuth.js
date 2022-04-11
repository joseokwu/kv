import { useSelector, useDispatch } from 'react-redux';
import { registerUser, loginUser, getProfile  as profile , changeStatus , 
logout, edit
} from '../store/actions/auth';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export const useAuth = () => {

const history = useHistory() 

const dispatch = useDispatch();

const stateAuth = useSelector((state) => state.auth );

const register = async(values) =>{
 
    try{
        const res = await dispatch(registerUser(values));
    console.log(res)
        if(res){
            history.push('/confirm/email')
        }
    }catch(err){
        console.log(err)
    }
}

const newLogin = async (values) =>{

    const res = await  dispatch(loginUser(values));
        return res;
}

const userProfile = useCallback(async (value) =>{
    
        dispatch(await profile(value));  

    }, [])
 
    const editUser = () =>{
        dispatch(edit())
    }

   const changeSignup = (value) =>{
       dispatch(changeStatus(value))
   } 
  
   const userLogout = () =>{
     dispatch(logout())

     history.push('/')

   }

    return {
        stateAuth,
        register,
        newLogin ,
        userProfile , 
        changeSignup,
        userLogout,
        editUser
    };
}

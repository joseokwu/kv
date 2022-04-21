import { useSelector, useDispatch } from 'react-redux';
import { registerUser, loginUser, getProfile  as profile , changeStatus , 
logout, edit , dashboardProfile ,updateStartupProfile , updatePartnerProfile,

} from '../store/actions/auth';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { updateStartup } from '../services';
import toast from 'react-hot-toast';




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

    }, [dispatch])


 const getDashboardProfile = useCallback(async (value) =>{
    
        dispatch(await dashboardProfile(value));  

    }, [dispatch])
 
    const editUser = () =>{
        dispatch(edit())
    }

   const changeSignup = (value) =>{
       dispatch(changeStatus(value))
   } 
  
   const updateProfile = (prop, value) =>{
       dispatch(updateStartupProfile(prop ,value));
   }
  
   const updatePartnerLocalData = async(prop, value , send) =>{
       
       dispatch(updatePartnerProfile(prop , value))
   }

   const userLogout = () =>{
     dispatch(logout())

     history.push('/')
   }

   const updateStartupInfo = async(lastPage = false) =>{
    try{
    const payload = {
    accType:stateAuth.type[0],
    values:stateAuth.startupData,
    lastPage
    }

    const res = await updateStartup(payload);
    toast.success(res?.message)

    }catch(err){
    console.log(err?.response)
    toast.error(err?.response?.data?.message ?? err?.response?.message)
    }
   }


   const updatePartnerInfo = async(lastPage = false) =>{
    try{
    const payload = {
    accType:stateAuth.type[0],
    values:stateAuth.partnerData,
    lastPage
    }

    const res = await updateStartup(payload);
    toast.success(res?.message)

    }catch(err){
    console.log(err?.response)
    toast.error(err?.response?.data?.message ?? err?.response?.message)
    }
   }

    return {
        stateAuth,
        register,
        newLogin ,
        userProfile , 
        changeSignup,
        userLogout,
        editUser,
        updatePartnerInfo,
        updatePartnerLocalData,
        getDashboardProfile,
        updateProfile,
        updateStartupInfo
    };
}

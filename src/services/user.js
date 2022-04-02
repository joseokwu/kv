import  { request } from '../utils/axios';

 export const register = async (values)=>{
    try{
        const res = await request.post('identity_service/register', values)
        
        return res?.data
    }catch(err){
        const error = err?.response?.data?.message || err?.message;
        throw new Error(error)
    }
}

export const userLogin = async (values) => {
    try {
        const res = await request.post('identity_service/login', values);
        
        return res?.data;
  
    } catch (err) {
        
        throw err
    }  
}  

export const profile = async (value) => {
    try {
       // console.log(value)
        console.log('trying to make request')
        const res = await request.post('identity_service/getProfile', {type:value});
        console.log(res?.data)
       return res?.data;

    } catch (err) {
        console.log('helllloo[o')
        console.log(err)
        const error = err?.response?.data?.message || err?.message;
        throw new Error(error)
    }  
}  

export const forgorPassword = async (values) => {
    try {
        const res = await request.post('', values)

        return res?.data
    } catch (err) {
        
        throw err;
    }
}


export const verifyEmail = async() =>{
    try{
        const res = await request.post('identity_service/getProfile');  
    }catch(err){
        throw err;
    }
}
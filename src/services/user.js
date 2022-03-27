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
        const error = err?.response?.data?.message || err?.message;
        throw new Error(error)
    }  
}  

export const profile = async () => {
    try {
        console.log('trying to make request')
        const res = await request.post('identity_service/verify', {});
       console.log(res.data)
       console.log('request made...')
        return res?.data;

    } catch (err) {
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
        const error = err?.response?.data?.message || err?.message;
        throw new Error(error)
    }
}

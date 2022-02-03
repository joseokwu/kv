import  { request } from '../utils/axios';

 export const register = async (values)=>{
    try{
        const res = await request.post('/signup', values)
        return res?.data
    }catch(err){
        const error = err?.response?.data?.message || err?.message;
        throw new Error(error)
    }
}

export const userLogin = async (values) => {
    try {
        const res = await request.post('/login', values);
        return res?.data;

    } catch (err) {
        const error = err?.response?.data?.message || err?.message;
        throw new Error(error)
    }  
}  

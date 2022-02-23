import  { request } from '../utils/axios';

 export const register = async (values)=>{
    try{
        const res = await request.post('signup', values)
        return res?.data
    }catch(err){
        const error = err?.response?.data?.message || err?.message;
        throw new Error(error)
    }
}

export const userLogin = async (values) => {
    try {
        const res = await request.post('signin', values);
        
        return res?.data;

    } catch (err) {
        const error = err?.response?.data?.message || err?.message;
        throw new Error(error)
    }  
}  

export const profile = async () => {
    try {
        const res = await request.post('identity');
        console.log(res?.data)
        return res?.data;

    } catch (err) {
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

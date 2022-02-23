import  { request } from '../utils/axios';


export const startUpReg = async(values) =>{

    try{

        const res = request.post('startup/add-startup-profile', values);

        return res?.data

    }catch(err){
        throw err;
    }
}
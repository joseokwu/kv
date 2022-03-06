import { request } from '../utils/axios';


 export const getPartners = async() =>{
    try{
    const res = await request.post('booster-partner');
    return res?.data
    }catch(err){
        throw err;
    }
}


export const getApplicant = async() =>{

    try{
    const res = await request.post('booster-partner/applicatnt');
    return res?.data  
    }catch(err){
        throw err;
    }
}

export const getPartnersProfile = async() =>{

    try{
    const res = await request.post('partner/profile');
    return res?.data  
    }catch(err){
        throw err;
    }
}
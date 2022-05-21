import { request } from "../utils/axios";

export const getStakeHolders = async(values) =>{
    try{    
    const response = await request.post('allStakeHolders', values)
    return response.data;
    }catch(err){
        console.log(err?.response?.data?.message)
        throw err;
    }
}


export const applicationManagement = async(values) =>{
    try{    
    const response = await request.post('manageApplications', values)
    return response.data;
    }catch(err){
        console.log(err?.response?.data?.message)
        throw err;
    }
}
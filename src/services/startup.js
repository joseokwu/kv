import { request } from '../utils/axios';

export const getDashbordInfo = async() =>{

    try{
        const res = await request.post('startup/dashboard');
    
        return res?.data;
    }catch(err){
        throw err;
    }
}

export const getFundRaise = async() =>{

    try{
        const res = await request.post('startup/fundraising');
        console.log(res?.data)
        return res?.data;
    }catch(err){
        throw err;
    }
}

getFundRaise();


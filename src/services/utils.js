import { uploadRequest } from '../utils/axios';

export const upload = async(value) => {
    try{
const response = await uploadRequest.post("/v1/file/upload", value);
    return response.data?.data
    }catch(err){
        throw err;
    }  
}

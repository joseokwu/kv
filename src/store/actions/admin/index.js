import { ADD_CRITERIA } from "../actions.types";
import { createCriteria } from '../../../services';
import toast from 'react-hot-toast';


export const newCriteria = async(data) => async(dispatch) => {
  
  try{
    const res = await createCriteria(data);
    console.log(res?.data)
    dispatch({
      type: ADD_CRITERIA,
      payload: res?.data,
    });
  }catch(err){
    toast.error(err?.response?.data?.message ?? "There was an issue creating criteria")
  }
  
};

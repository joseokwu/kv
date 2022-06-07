import { ADD_CRITERIA , START_ACTION , END_ACTION , ADD_CATEGORY } from "../actions.types";
import { createCriteria } from '../../../services';
import toast from 'react-hot-toast';


export const newCriteria = async(data) => async(dispatch) => {
  
  try{
    dispatch({
      type:START_ACTION
    })
    const res = await createCriteria(data);
    console.log(res?.data)
    dispatch({
      type: ADD_CRITERIA,
      payload: res?.data,
    });
    dispatch({
      type:END_ACTION
    });
  
    toast.success(res?.message)
  }catch(err){
    toast.error(err?.response?.data?.message ?? "There was an issue creating criteria")
  }
  
};

export const addCategory = (data) => (dispatch) =>{

  dispatch({
    type:ADD_CATEGORY,
    payload:data
  })
} 


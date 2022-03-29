import {
    DASHBOARD, WALLET,
    TRANSACTIONS, DATA_BANK,
    CHART_SUPPORT, SETTINGS,
    CHANGE_PAGE,
    SHOW_EVENT,
    GET_EVENTS_FAILED,
    GET_EVENTS_SUCCESS,
    ADD_WORK_EXPERIENCE
  } from '../actions.types';

import { getEvents } from '../../../services/events';


  export const changeDPath = (value)=> (dispatch) => {
      console.log(value)
    dispatch({
      type:CHANGE_PAGE,
      payload:value
    })

      
}

export  const events = (id) => async(dispatch) =>{
    try{
      const res = await getEvents(id);
        dispatch({
          type:GET_EVENTS_SUCCESS
        })

        return res;

    }catch(err){
      dispatch({
        type: GET_EVENTS_FAILED
      })
    }
}

export const addwork = (value) => (dispatch) =>{
  
  dispatch({
    type:ADD_WORK_EXPERIENCE,
    payload:value
  })
}

// const setAlert = ()=>{

// }

export const showDEventAction = ()=> (dispatch) => {

  dispatch({
    type:SHOW_EVENT,
  })
}
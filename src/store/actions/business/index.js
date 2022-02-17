import {
    DASHBOARD, WALLET,
    TRANSACTIONS, DATA_BANK,
    CHART_SUPPORT, SETTINGS,
    CHANGE_PAGE,
    SHOW_EVENT,
  } from '../actions.types';


  export const changeDPath = (value)=> (dispatch) => {
      console.log(value)
    dispatch({
      type:CHANGE_PAGE,
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
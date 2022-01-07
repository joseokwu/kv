import React, {
    createContext,
    useEffect,
    useState,
  useReducer,
    useCallback

  } from 'react'
  import { withRouter } from 'react-router-dom'
//import { toast } from 'react-toastify';
import {
  DASHBOARD, WALLET,
  TRANSACTIONS, DATA_BANK,
  CHART_SUPPORT, SETTINGS,
  SHOW_EVENT
} from './reducer';

import { businessReducers } from './reducer';

  export const BusinessContext = createContext()

export const BusinessProvider = withRouter(({ children, history }) => {

  const [state, dispatch] = useReducer(businessReducers, {
    loading: false,
    showPage: 'Overview',
    alert:{
      success:false, 
      message:null,
       autoClose:false,
        action:false},
        showEvent:false
  })

  const setAlert = ()=>{

  }

  const showEventAction = ()=>{

    dispatch({
      type:SHOW_EVENT,
    })
  }


  return (
    <BusinessContext.Provider value={{
      state,
      setAlert,
      showEventAction
    }}>
      {children}
    </BusinessContext.Provider>
  );

});

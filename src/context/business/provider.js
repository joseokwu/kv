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
  CHANGE_PAGE
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
        action:false, 
      },
      path:1
  })

  const changePath = (value)=>{

      dispatch({
        type:CHANGE_PAGE,
        payload:value
      })

  }


  return (
    <BusinessContext.Provider value={{
      state,
      changePath
    }}>
      {children}
    </BusinessContext.Provider>
  );

});

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
  CHANGE_PAGE,
  SHOW_EVENT,
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
      changePath,
      setAlert,
      showEventAction,
    }}>
      {children}
    </BusinessContext.Provider>
  )

});

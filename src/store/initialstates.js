export  const INIT_STATE = {
    authenticated: false,
    user: null,
    error: false,
    loading: false,
    roles:[]
  }

  export const INIT_STATE_BUSINESS = {
    loading: false,
    showPage: 'Overview',
    alert:{
      success:false, 
      message:null,
       autoClose:false,
        action:false, 
      },
      path:1
};
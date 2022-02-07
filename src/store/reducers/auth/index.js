




  const INIT_STATE = {
    authenticated: false,
    user: null,
    error: false,
    loading: false 
  }

  const authReducer = (state=INIT_STATE, action) =>{

    switch(action.type){

        default:
            return state;
    }
  }


  export default authReducer;
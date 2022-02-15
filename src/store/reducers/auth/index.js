




  const INIT_STATE = {
    authenticated: true,
    user: null,
    error: false,
    loading: false,
    roles:['investor','startup','mentor']
  }

  const authReducer = (state=INIT_STATE, action) =>{

    switch(action.type){

        default:
            return state;
    }
  }


  export default authReducer;
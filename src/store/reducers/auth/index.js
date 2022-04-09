import { LOGIN_FAILED, AUTH_START,
  REGISTER_FAILED, LOGIN_SUCCESS,
  REGISTER_SUCCESS , USER_PROFILE,
  USER_PROFILE_FAIL, SET_SIGNUP_STATUS,
  LOG_OUT

} from '../../actions/actions.types';
import { INIT_STATE } from '../../initialstates';



  const authReducer = (state=INIT_STATE, action) =>{

    switch(action.type){
      case AUTH_START:
        return {
          ...state,
          loading:true
        }
        case REGISTER_SUCCESS :
          return {
            ...state,
            loading:false
          }
          case REGISTER_FAILED :
            return {
              ...state,
              loading:false, error:action.payload
            }
            case LOGIN_SUCCESS :
              return {
                ...state,
                  loading:false,
                 roles: action.payload?.type,
                 username:action.payload?.startupname ? action.payload?.startupname : action.payload?.firstname , 
                authenticated:true
              }
              case LOGIN_FAILED:
                return {
                  ...state,
                  loading:false, error:action.payload
                }
              case USER_PROFILE :
                return {
                  ...state,
                  loading:false,
                  authenticated:true,
                  user:action?.payload,
                  roles:action?.payload?.role,
                  signUpStatus:action?.payload?.role[0],
                  completedRegistration: action?.payload?.fundRaising ? true : false 
                  
                }
                case USER_PROFILE_FAIL :
                  return {
                    ...state,
                    loading:false,
                    authenticated:false,
                    user:null,
                    roles:[]
                    
                  }
                 case SET_SIGNUP_STATUS:
                   return {
                     ...state,
                     signUpStatus:action.payload
                   } 
                 case LOG_OUT:
                   return {
                     ...state,
                     authenticated:false,
                     completedRegistration:false,
                     roles:[]
                   }  

        default:
            return state;
    }
  }


  export default authReducer;
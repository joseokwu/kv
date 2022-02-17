import { LOGIN_FAILED, AUTH_START,
  REGISTER_FAILED, LOGIN_SUCCESS,
  REGISTER_SUCCESS , USER_PROFILE,
  USER_PROFILE_FAIL

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
                loading:false, roles: action.payload,
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
                  loading:false ,
                  authenticated:true,
                  user:action?.payload?.user,
                  roles:action?.payload?.roles
                }
                case USER_PROFILE_FAIL :
                  return {
                    ...state,
                    loading:false ,
                    
                  }

        default:
            return state;
    }
  }


  export default authReducer;
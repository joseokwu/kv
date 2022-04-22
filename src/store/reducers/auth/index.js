import {
  LOGIN_FAILED,
  AUTH_START,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  USER_PROFILE,
  USER_PROFILE_FAIL,
  SET_SIGNUP_STATUS,
  LOG_OUT,
  EDIT,
  DASHBOARD_USER_PROFILE,
  DASHBOARD_LOAD,
  UPDATE_STARTUP_DATA,
  UPDATE_STARTUP_INFO,
  UPDATE_MENTOR_DATA,
  UPDATE_MENTOR_INFO,
  UPDATE_PROFILE_FAIL,
  UPDATE_PARTNER_INFO,
} from "../../actions/actions.types";
import { INIT_STATE } from "../../initialstates";

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case DASHBOARD_LOAD:
      return {
        ...state,
        dashboardLoad: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        type: action.payload?.type,
        username: action.payload?.startupname
          ? action.payload?.startupname
          : action.payload?.firstname,
        authenticated: true,
        email: action.payload?.email,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_PROFILE:
      if (action?.payload?.type[0] === "boosterpartner") {
        return {
          ...state,
          loading: false,
          authenticated: true,
          dashboardLoad: false,
          logo:action.payload?.logo,
          username:action?.payload.username,
          ...action?.payload,
          type: action?.payload?.type,
          signUpStatus: action?.payload?.type[0],
          email: action?.payload?.email,
        };
      }
      if (action?.payload?.type[0] === "startup") {
        return {
          ...state,
          loading: false,
          dashboardLoad: false,
          authenticated: true,
          user: action?.payload,
          startupData: action.payload,
          type: action?.payload?.type,
          signUpStatus: action?.payload?.type[0],
          email: action?.payload?.email,
        };
      }
      break;
    case DASHBOARD_USER_PROFILE:
      console.log(action?.payload);
      if (action?.payload?.type[0] === "boosterpartner") {
        return {
          ...state,
          dashboardLoad: false,
          partnerData: action?.payload,
          type: action?.payload?.type,
          signUpStatus: action?.payload?.type[0],
          email: action?.payload?.email,
        };
      }
      if (action?.payload?.type[0] === "startup") {
        return {
          ...state,
          dashboardLoad: false,
          user: action?.payload,
          type: action?.payload?.type,
          signUpStatus: action?.payload?.type[0],
          email: action?.payload?.email,
          startupData: action.payload,
        };
      }

      break;
    case USER_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        authenticated: false,
        dashboardLoad: false,
        user: null,
        type: [],
      };
    case SET_SIGNUP_STATUS:
      return {
        ...state,
        signUpStatus: action.payload,
      };
    case LOG_OUT:
      return {
        state: {},
      };
    case EDIT:
      return {
        ...state,
        completedRegistration: false,
      };
    case UPDATE_STARTUP_DATA:
      return {
        ...state,
        startupData: action.payload,
      };
    case UPDATE_STARTUP_INFO:
      return {
        ...state,
        startupData: {
          ...state.startupData,
          [action.payload.property]: {
            ...state.startupData[action.payload.property],
            ...action.payload.value,
          },
        },
      };
      case UPDATE_PARTNER_INFO: 
      if(action.payload.property.trim() !== ""){
      
        return {
          ...state,
          partnerData :{
            ...state.partnerData,
            [action.payload.property] :{
          ...state.partnerData[action.payload.property],
          ...action.payload.value
            }
          }
        }
      } 
      break;
   
    case UPDATE_MENTOR_INFO:
      return {
        ...state,
        mentorData: {
          ...state.mentorData,
          [action.payload.property]: {
            ...state.mentorData[action.payload.property],
            ...action.payload.value,
          },
        },
      }
    
  
    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;

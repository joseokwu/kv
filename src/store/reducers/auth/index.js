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
      return {
        ...state,
        loading: false,
        authenticated: true,
        user: action?.payload,
        type: action?.payload?.type,
        signUpStatus: action?.payload?.type[0],
        email: action?.payload?.email,
      };

    case DASHBOARD_USER_PROFILE:
      return {
        ...state,
        dashboardLoad: false,
        user: action?.payload,
        type: action?.payload?.type,
        signUpStatus: action?.payload?.type[0],
        email: action?.payload?.email,
      };
    case USER_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        authenticated: false,
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
        ...state,
        authenticated: false,
        completedRegistration: false,
        type: [],
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
      //  alert(JSON.stringify(action.payload));
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
    case UPDATE_MENTOR_DATA:
      return {
        ...state,
        mentorData: action.payload,
      };
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
      };
    default:
      return state;
  }
};

export default authReducer;

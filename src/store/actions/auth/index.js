import {
  AUTH_START,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  USER_PROFILE,
  USER_PROFILE_FAIL,
  SET_SIGNUP_STATUS,
  EDIT,
  LOG_OUT,
  DASHBOARD_USER_PROFILE,
  UPDATE_STARTUP_INFO,
  DASHBOARD_LOAD,
  UPDATE_STARTUP_DATA,
  UPDATE_INVESTOR_DATA,
  UPDATE_INVESTOR_INFO,
  UPDATE_MENTOR_INFO,
} from "../actions.types";
import {
  register,
  userLogin,
  profile,
  forgorPassword,
} from "../../../services";
import toast from "react-hot-toast";
import { setAuthToken, setType } from "../../../utils/helpers";

export const registerUser = async (value) => async (dispatch) => {
  try {
    dispatch({
      type: AUTH_START,
    });
    const res = await register(value);
    console.log(res);
    setAuthToken(res?.data?.token);
    toast.success("A confirmation mail has been sent to your email");
    dispatch({
      type: REGISTER_SUCCESS,
    });

    return res;
  } catch (err) {
    toast.success(err?.response?.data?.message ?? err?.response);
    dispatch({
      type: REGISTER_FAILED,
    });
  }
};

export const loginUser = async (value) => async (dispatch) => {
  try {
    dispatch({
      type: AUTH_START,
    });
    const res = await userLogin(value);
    console.log(res?.data?.user);
    if (!res?.success) {
      toast.error(res?.message);
      dispatch({
        type: LOGIN_FAILED,
      });
    } else {
      setAuthToken(res?.data?.token);
      setType(res?.data?.user?.type[0]);
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res?.data?.user,
      });

      return res;
    }
  } catch (err) {
    console.log(err?.response?.data?.message, "err");
    toast.error(err?.response?.data?.message);
    //console.log('error')
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

export const dashboardProfile = async (value) => async (dispatch) => {
  try {
    dispatch({
      type: DASHBOARD_LOAD,
    });
    const res = await profile(value);
    if (res) {
      dispatch({
        type: DASHBOARD_USER_PROFILE,
        payload: res?.data,
      });
    }
  } catch (err) {
    dispatch({
      type: USER_PROFILE_FAIL,
    });
  }
};

export const updateStartupProfile =
  async (property, value) => async (dispatch) => {
    dispatch({
      type: UPDATE_STARTUP_INFO,
      payload: {
        property,
        value,
      },
    });
  };

export const updateInvestorProfile =
  async (property, value) => async (dispatch) => {
    dispatch({
      type: UPDATE_INVESTOR_INFO,
      payload: {
        value,
        property,
      },
    });
  };

export const updateInvestorData = async (value) => async (dispatch) => {
  try {
    const res = await profile(value);
    if (res) {
      console.log(res?.data?.investorData);
      dispatch({
        type: UPDATE_INVESTOR_DATA,
        payload: res?.data?.investorData,
      });
    }
  } catch (err) {
    dispatch({
      type: USER_PROFILE_FAIL,
    });
  }
};

export const updateStartupData = async (value) => async (dispatch) => {
  try {
    const res = await profile(value);
    if (res) {
      console.log(res?.data?.startupData);
      dispatch({
        type: UPDATE_STARTUP_DATA,
        payload: res?.data?.startupData,
      });
    }
  } catch (err) {
    dispatch({
      type: USER_PROFILE_FAIL,
    });
  }
};

export const getProfile = async (value) => async (dispatch) => {
  try {
    dispatch({
      type: AUTH_START,
    });
    const res = await profile(value);
    if (res) {
      dispatch({
        type: USER_PROFILE,
        payload: res?.data,
      });
    }
  } catch (err) {
    dispatch({
      type: USER_PROFILE_FAIL,
    });
  }
};

export const changeStatus = (value) => async (dispatch) => {
  dispatch({
    type: SET_SIGNUP_STATUS,
    payload: value,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
  localStorage.removeItem("user:token");
};

export const edit = () => (dispatch) => {
  dispatch({
    type: EDIT,
  });
};

export const updateMentorProfile =
  async (property, value) => async (dispatch) => {
    console.log("value", value);
    console.log("property", property);
    dispatch({
      type: UPDATE_MENTOR_INFO,
      payload: {
        value,
        property,
      },
    });
  };

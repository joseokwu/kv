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
    UPDATE_PARTNER_INFO,
    UPDATE_MENTOR_INFO,
    UPDATE_MENTOR_DATA,
    UPDATE_STARTUP_USER_PROFILE,
    REMOVE_WORK_EXPERIENCE,
    REMOVE_EDUCATION,
} from "../actions.types";
import {
    register,
    userLogin,
    profile,
    user,
    updateFounderProfile,
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
        console.log(err?.response);
        toast.error(err?.response?.data?.message ?? err?.response);
        console.log(err?.response?.data?.message ?? err?.response);
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
        console.log(res);
        console.log(res?.data?.user);
        if (!res?.success) {
            toast.error(res?.message);
            dispatch({
                type: LOGIN_FAILED,
            });
        } else {
            console.log("continua");
            setAuthToken(res?.data?.token);
            setType(res?.data?.user?.userType);
            console.log(res);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res?.data?.user,
            });

            return res;
        }
    } catch (err) {
        console.log(err?.response?.data?.message, "err");
        console.log(err, "errorr");
        toast.error(
            err?.response?.data?.message ?? "Login error please try again"
        );
        //console.log('error')
        dispatch({
            type: LOGIN_FAILED,
        });
    }
};

export const dashboardProfile = async () => async (dispatch) => {
    try {
        dispatch({
            type: DASHBOARD_LOAD,
        });
        console.log("function dashboardProfile");
        const res = await profile();
        if (res?.success) {
            dispatch({
                type: DASHBOARD_USER_PROFILE,
                payload: res?.data,
            });
        }
    } catch (err) {
        console.log("err", err);
        console.log("failed to store user profile ");
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

export const updatePartnerProfile =
    async (property, value) => async (dispatch) => {
        dispatch({
            type: UPDATE_PARTNER_INFO,
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
        const res = await profile();
        if (res) {
            console.log(res?.data?.investorData);
            dispatch({
                type: UPDATE_INVESTOR_DATA,
                payload: res?.data?.investorData,
            });
        }
    } catch (err) {
        console.log("err", err);
        dispatch({
            type: USER_PROFILE_FAIL,
        });
    }
};

export const updateStartupData = async (value) => async (dispatch) => {
    try {
        const res = await profile();
        if (res) {
            // console.log(res?.data?.profileData.startupRes);
            dispatch({
                type: UPDATE_STARTUP_DATA,
            });
        }
    } catch (err) {
        console.log("err", err);
        console.log("failed to update startup bbb");
        dispatch({
            type: USER_PROFILE_FAIL,
        });
    }
};

export const updateStartupUserProfile = async (value) => async (dispatch) => {
    try {
        const res = await updateFounderProfile(value);
        dispatch({
            type: UPDATE_STARTUP_USER_PROFILE,
            payload: res?.data,
        });
        toast.success(res?.message);
    } catch (err) {
        toast.error(err?.response?.data?.message ?? "Unable to update profile");
    }
};

export const updateMentorData = async (value) => async (dispatch) => {
    try {
        console.log("function updateMentorData");
        const res = await profile();
        if (res) {
            dispatch({
                type: UPDATE_MENTOR_DATA,
                payload: res?.data?.data,
            });
        }
    } catch (err) {
        console.log("err", err);
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
        const res1 = await user();
        const res2 = await profile();

        if (res1) {
            console.log(res1);
            console.log(value);
            dispatch({
                type: USER_PROFILE,
                payload: res1?.data?.data,
            });
        }
        if (res2) {
            console.log(res2);
            console.log(value);
            dispatch({
                type: DASHBOARD_USER_PROFILE,
                payload: res2?.data,
            });
        }
    } catch (err) {
        console.log("err", err);
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
        dispatch({
            type: UPDATE_MENTOR_INFO,
            payload: {
                value,
                property,
            },
        });
    };
export const removeWorkExperienceAction = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_WORK_EXPERIENCE,
        payload: id,
    });
};

export const removeEducationAction = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_EDUCATION,
        payload: id,
    });
};

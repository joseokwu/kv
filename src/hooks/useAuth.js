import { useSelector, useDispatch } from "react-redux";
import {
  registerUser,
  loginUser,
  getProfile as profile,
  changeStatus,
  logout,
  edit,
  dashboardProfile,
  updateStartupData,
  updateStartupProfile,
  updatePartnerProfile,
  updateMentorProfile,
  updateMentorData,
} from "../store/actions/auth";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { postMentorProfile, updateStartup } from "../services";
import toast from "react-hot-toast";

export const useAuth = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const stateAuth = useSelector((state) => state.auth);

  const register = async (values) => {
    try {
      const res = await dispatch(registerUser(values));
      console.log(res);
      if (res) {
        history.push("/confirm/email");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const newLogin = async (values) => {
    const res = await dispatch(loginUser(values));

    return res;
  };

  const userProfile = useCallback(
    async (value) => {
      dispatch(await profile(value));
    },
    [dispatch]
  );

  const callUpdateStartupData = async (value) => {
    dispatch(await updateStartupData(value));
  };

  const getDashboardProfile = useCallback(
    async (value) => {
      dispatch(await dashboardProfile(value));
    },
    [dispatch]
  );

  const editUser = () => {
    dispatch(edit());
  };

  const changeSignup = (value) => {
    dispatch(changeStatus(value));
  };

  const updateProfile = (prop, value) => {
    dispatch(updateStartupProfile(prop, value));
  };

  const updateMentorProfileState = (prop, value) => {
    dispatch(updateMentorProfile(prop, value));
  };

  //hooks to pass data for mentor profile to the mentor profile service
  const updateMentorInfo = async (lastPage = false) => {
    try {
      const dataToPost = {
        accType: "mentor",
        values: stateAuth.mentorData,
        lastPage,
      };

      const res = await updateStartup(dataToPost);
      console.log("res", res);
      return res?.success;
    } catch (error) {
      console.error(error?.response?.data?.message ?? error?.response?.message);
      return false;
    }
  };

  const userLogout = () => {
    dispatch(logout());

    history.push("/");
  };

  const updatePartnerLocalData = async (prop, value, send) => {
    dispatch(updatePartnerProfile(prop, value));
  };

  const updateStartupInfo = async (lastPage = false) => {
    try {
      const payload = {
        accType: stateAuth.type[0],
        values: stateAuth.startupData,
        lastPage,
      };

      const res = await updateStartup(payload);
      toast.success(res?.message);
    } catch (err) {
      console.log(err?.response);
      toast.error(err?.response?.data?.message ?? err?.response?.message);
    }
  };

  const updatePartnerInfo = async (lastPage = false) => {
    try {
      const payload = {
        accType: stateAuth.type[0],
        values: stateAuth.partnerData,
        lastPage,
      };

      const res = await updateStartup(payload);
      toast.success(res?.message);
    } catch (err) {
      console.log(err?.response);
      toast.error(err?.response?.data?.message ?? err?.response?.message);
    }
  };

  const getSavedMentorData = async (value) => {
    dispatch(await updateMentorData(value));
  };

  return {
    stateAuth,
    register,
    newLogin,
    userProfile,
    changeSignup,
    userLogout,
    editUser,
    updatePartnerInfo,
    updatePartnerLocalData,
    getDashboardProfile,
    updateProfile,
    updateStartupInfo,
    updateMentorProfileState,
    getSavedMentorData,
    updateMentorInfo,
  };
};

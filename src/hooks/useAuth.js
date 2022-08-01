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
    updateInvestorProfile,
    updatePartnerProfile,
    updateInvestorData,
    updateMentorProfile,
    updateMentorData,
    updateStartupUserProfile,
    removeWorkExperienceAction,
    removeEducationAction,
} from "../store/actions/auth";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { updateStartup, postMentorProfile } from "../services";
import toast from "react-hot-toast";

export const useAuth = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const stateAuth = useSelector((state) => state.auth);

    const register = async (values) => {
        try {
            const res = await dispatch(registerUser(values));
            //console.log(res , 'something dey wrong');
            if (res) {
                history.push("/confirm/email");
            }
        } catch (err) {
            toast.error(
                err?.response?.data?.message ?? "Sever error please try again"
            );
        }
    };

    const newLogin = async (values) => {
        const res = await dispatch(loginUser(values));

        return res;
    };

    const userProfile = useCallback(
        async (value) => {
            // dispatch(await profile(value));
        },
        [dispatch]
    );

    const callUpdateStartupData = async (value) => {
        console.log(value);
        dispatch(updateStartupUserProfile(value));
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

    const updateProfile = async (prop, value, save) => {
        await dispatch(updateStartupProfile(prop, value));
        if (save) {
            return true;
        }
    };

    const updateMentorProfileState = (prop, value) => {
        dispatch(updateMentorProfile(prop, value));
    };

    const updateMentorInfo = async (lastPage = false) => {
        try {
            const dataToPost = {
                accType: "mentor",
                values: lastPage
                    ? { ...stateAuth.mentorData, applicationCompleted: true }
                    : stateAuth.mentorData,
                lastPage,
            };

            const res = await updateStartup(dataToPost);
            return res?.success;
        } catch (error) {
            console.error(
                error?.response?.data?.message ?? error?.response?.message
            );
            return false;
        }
    };

    const updatePartnerLocalData = async (prop, value, send) => {
        dispatch(updatePartnerProfile(prop, value));
    };

    const userLogout = () => {
        dispatch(logout());

        history.push("/");
    };

    const updateStartupInfo = async (lastPage = false) => {
        try {
            const payload = {
                accType: stateAuth.type[0],
                values: lastPage
                    ? { ...stateAuth.startupData, applicationCompleted: true }
                    : stateAuth.startupData,
                lastPage,
            };
            console.log(payload);
            const res = await updateStartup(payload);
            console.log(res);
            toast.success(res?.message);
            if (res?.success && lastPage) {
                window.open("/startup/dashboard", "_self");
            }
        } catch (err) {
            console.log(err?.response);
            toast.error(err?.response?.data?.message ?? err?.response?.message);
        }
    };

    const updateInvestorProfileData = (prop, value) => {
        dispatch(updateInvestorProfile(prop, value));
    };

    const getInvestorData = async (value) => {
        dispatch(await updateInvestorData(value));
    };

    const updateInvestorInfo = async (lastPage = false) => {
        try {
            const payload = {
                accType: stateAuth.type[0],
                values: lastPage
                    ? { ...stateAuth.investorData, applicationCompleted: true }
                    : stateAuth.investorData,
                lastPage,
            };
            const res = await updateStartup(payload);
            toast.success(res?.message);
            if (lastPage) {
                history.push("/investor/dashboard");
            }
            console.log(payload);
        } catch (err) {
            console.log(err?.response);
            toast.error(err?.response?.data?.message ?? err?.response?.message);
        }
    };

    const getSavedMentorData = async (value) => {
        dispatch(await updateMentorData(value));
    };

    const updatePartnerInfo = async (lastPage = false) => {
        try {
            const payload = {
                accType: stateAuth.type[0],
                values: lastPage
                    ? { ...stateAuth.partnerData, applicationCompleted: true }
                    : stateAuth.partnerData,
                lastPage,
            };

            const res = await updateStartup(payload);
            toast.success(res?.message);
            if (lastPage) {
                history.push("/boosterpartner/dashboard");
                return;
            }
        } catch (err) {
            console.log(err?.response);
            toast.error(err?.response?.data?.message ?? err?.response?.message);
        }
    };
    const removeWorkExperience = (id) => {
        dispatch(removeWorkExperienceAction(id));
    };
    const removeEducation = (id) => {
        dispatch(removeEducationAction(id));
    };

    return {
        stateAuth,
        register,
        newLogin,
        userProfile,
        changeSignup,
        userLogout,
        editUser,
        callUpdateStartupData,
        updatePartnerInfo,
        updatePartnerLocalData,
        getDashboardProfile,
        updateProfile,
        updateStartupInfo,
        updateInvestorProfileData,
        updateInvestorInfo,
        getInvestorData,
        updateMentorProfileState,
        getSavedMentorData,
        updateMentorInfo,
        removeEducation,
        removeWorkExperience,
    };
};

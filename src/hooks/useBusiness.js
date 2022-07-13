import { useSelector, useDispatch } from "react-redux";
import {
    changeDPath,
    showDEventAction,
    setDWorkExperience,
    setDEducation,
    setDFundraising,
    getApplication,
    sendApplication,
    removeEducationAction,
    editWorkExperienceAction,
    editEducationAction,
} from "../store/actions/business";
import { useAuth } from "./useAuth";

export const useActivity = () => {
    const { stateAuth } = useAuth();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.business);
    //const authSte = useSelector((state) => state);

    const changePath = (value) => {
        dispatch(changeDPath(value));
    };

    const showEventAction = () => {
        dispatch(showDEventAction());
    };

    const setWorkExperience = (values, type) => {
        dispatch(setDWorkExperience(values, type));
    };

    const editWorkExperience = (value) => {
        dispatch(editWorkExperienceAction(value));
    };

    const setEducation = (values, type) => {
        dispatch(setDEducation(values, type));
    };

    const removeEducation = (id) => {
        dispatch(removeEducationAction(id));
    };
    const editEducation = (value) => {
        dispatch(editEducationAction(value));
    };

    const setFundraising = (values) => {
        dispatch(setDFundraising(values));
    };

    const getApp = (values) => {
        dispatch(getApplication(values));
    };

    const sendApp = (value) => {
        dispatch(sendApplication(value));
    };

    return {
        state,
        changePath,
        showEventAction,
        setWorkExperience,
        setEducation,
        setFundraising,
        getApp,
        sendApp,
        removeEducation,
        editWorkExperience,
        editEducation,
    };
};

import {
    // DASHBOARD,
    // WALLET,
    // TRANSACTIONS,
    // DATA_BANK,
    // DASHBOARD_LOAD,
    // SETTINGS,
    CHANGE_PAGE,
    SHOW_EVENT,
    GET_EVENTS_FAILED,
    GET_EVENTS_SUCCESS,
    SET_WORK_EXPERIENCE,
    SET_EDUCATION,
    SET_FUNDRAISING,
    SET_WORK_EXPERIENCE_DATABASE,
    REMOVE_WORK_EXPERIENCE,
    SET_EDUCATION_DATABASE,
    GET_APPLICATIONS,
    SEND_APPLICATION,
    EDIT_WORK_EXPERIENCE,
    EDIT_EDUCATION,
} from "../actions.types";

import { getEvents } from "../../../services/events";

export const changeDPath = (value) => (dispatch) => {
    console.log(value);
    dispatch({
        type: CHANGE_PAGE,
        payload: value,
    });
};

export const events = (id) => async (dispatch) => {
    try {
        const res = await getEvents(id);
        dispatch({
            type: GET_EVENTS_SUCCESS,
        });

        return res;
    } catch (err) {
        dispatch({
            type: GET_EVENTS_FAILED,
        });
    }
};

export const showDEventAction = () => (dispatch) => {
    dispatch({
        type: SHOW_EVENT,
    });
};

export const setDWorkExperience =
    (values, type = "internal") =>
    (dispatch) => {
        if (type === "server") {
            dispatch({
                type: SET_WORK_EXPERIENCE_DATABASE,
                payload: values,
            });
        } else {
            dispatch({
                type: SET_WORK_EXPERIENCE,
                payload: values,
            });
        }
    };

export const editWorkExperienceAction = (value) => (dispatch) => {
    dispatch({
        type: EDIT_WORK_EXPERIENCE,
        payload: value,
    });
};
export const setDEducation =
    (values, type = "internal") =>
    (dispatch) => {
        if (type === "server") {
            console.log(type);
            dispatch({
                type: SET_EDUCATION_DATABASE,
                payload: values,
            });
        } else {
            dispatch({
                type: SET_EDUCATION,
                payload: values,
            });
        }
    };

export const editEducationAction = (value) => (dispatch) => {
    dispatch({
        type: EDIT_EDUCATION,
        payload: value,
    });
};

export const setDFundraising = (values) => (dispatch) => {
    dispatch({
        type: SET_FUNDRAISING,
        payload: values,
    });
};

export const getApplication = (values) => (dispatch) => {
    dispatch({
        type: GET_APPLICATIONS,
        payload: values,
    });
};

export const sendApplication = (value) => (dispatch) => {
    dispatch({
        type: SEND_APPLICATION,
        payload: value,
    });
};

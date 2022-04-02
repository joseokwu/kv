import {
  DASHBOARD,
  WALLET,
  TRANSACTIONS,
  DATA_BANK,
  CHART_SUPPORT,
  SETTINGS,
  CHANGE_PAGE,
  SHOW_EVENT,
  GET_EVENTS_FAILED,
  GET_EVENTS_SUCCESS,
  SET_WORK_EXPERIENCE,
  SET_EDUCATION,
  SET_FUNDRAISING,
} from '../actions.types';

import { getEvents } from '../../../services/events';

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


// export const addwork = (value) => (dispatch) =>{

//   dispatch({
//     type:ADD_WORK_EXPERIENCE,
//     payload:value
//   })
// }


// const setAlert = ()=>{

// }

export const showDEventAction = () => (dispatch) => {
  dispatch({
    type: SHOW_EVENT,
  });
};

export const setDWorkExperience = (values) => (dispatch) => {
  dispatch({
    type: SET_WORK_EXPERIENCE,
    payload: values,
  });
};

export const setDEducation = (values) => (dispatch) => {
  dispatch({
    type: SET_EDUCATION,
    payload: values,
  });

};

export const setDFundraising = (values) => (dispatch) => {
  dispatch({
    type: SET_FUNDRAISING,
    payload: values,
  });
};


import {
  DASHBOARD,
  WALLET,
  TRANSACTIONS,
  DATA_BANK,
  CHART_SUPPORT,
  SETTINGS,
  CHANGE_PAGE,
  SHOW_EVENT,
  DASH_VIEW,
  SET_WORK_EXPERIENCE,
  SET_EDUCATION,
  SET_FUNDRAISING,
  SET_WORK_EXPERIENCE_DATABASE,
  SET_EDUCATION_DATABASE,
  GET_APPLICATIONS,
  SEND_APPLICATION,
  REMOVE_WORK_EXPERIENCE,
  EDIT_WORK_EXPERIENCE,
} from "../../actions/actions.types";

import { INIT_STATE_BUSINESS } from "../../initialstates";

const businessReducer = (state = INIT_STATE_BUSINESS, action) => {
  switch (action.type) {
    case DASHBOARD:
      return {
        ...state,
        showPage: action.payload,
      };
    case WALLET:
      return {
        ...state,
        showPage: action.payload,
      };
    case TRANSACTIONS:
      return {
        ...state,
        showPage: action.payload,
      };
    case DATA_BANK:
      return {
        ...state,
        showPage: action.payload,
      };
    case CHART_SUPPORT:
      return {
        ...state,
        showPage: action.payload,
      };
    case SETTINGS:
      return {
        ...state,
        showPage: action.payload,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        path: action.payload,
      };

    case SHOW_EVENT:
      return {
        ...state,
        showEvent: !state.showEvent,
      };
    case DASH_VIEW:
      return {
        ...state,
        dash_view: action.payload,
      };

    case SET_WORK_EXPERIENCE_DATABASE:
      return {
        ...state,
        experience: action.payload,
      };

    case SET_WORK_EXPERIENCE:
      return {
        ...state,
        experience: [...state.experience, action.payload],
      };
    case REMOVE_WORK_EXPERIENCE:
      return {
        ...state,
        experience: [
          ...state.experience.slice(0, action.payload),
          ...state.experience.slice(action.payload + 1),
        ],
      };
    case EDIT_WORK_EXPERIENCE:
      const newExperience = state.experience.filter(
        (index) => index !== action.payload.index
      );
      newExperience[action.payload.index] = action.payload.data;
      return {
        ...state,
        experience: [...newExperience],
      };
    case SET_EDUCATION_DATABASE:
      return {
        ...state,
        education: action.payload,
      };

    case SET_EDUCATION:
      return {
        ...state,
        education: [...state.education, action.payload],
      };

    case SET_FUNDRAISING:
      return {
        ...state,
        fundraising: { ...state.fundraising, ...action.payload },
      };

    case GET_APPLICATIONS:
      return {
        ...state,
        applications: action.payload,
      };

    case SEND_APPLICATION:
      return {
        ...state,
        applications: state.applications.filter(
          (item) => item?.userId !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default businessReducer;

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
} from '../../actions/actions.types';

import { INIT_STATE_BUSINESS } from '../../initialstates';

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
      return { ...state, dash_view: action.payload };

    case SET_WORK_EXPERIENCE:
      return {
        ...state,
        workExperience: [...state.workExperience, action.payload],
      };

    case SET_EDUCATION:
      return {
        ...state,
        education: [...state.education, action.payload],
      };

    default:
      return state;
  }
};

export default businessReducer;
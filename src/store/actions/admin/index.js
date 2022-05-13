import { dispatch } from "react-hot-toast/dist/core/store";
import { ADD_CRITERIA } from "../actions.types";

export const updateCriteria = (data) => (dispatch) => {
  dispatch({
    type: ADD_CRITERIA,
    payload: data,
  });
};

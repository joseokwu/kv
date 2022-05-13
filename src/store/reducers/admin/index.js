import { ADD_CRITERIA } from "../../actions/actions.types";
import { INIT_STATE_ADMIN } from "../../initialstates";

const adminReducer = (state = INIT_STATE_ADMIN, action) => {
  switch (action.type) {
    case ADD_CRITERIA:
      return {
        ...state,
        criteria: action.payload,
      };

    default:
      return state;
  }
};

export default adminReducer;

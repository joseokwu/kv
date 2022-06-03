import { ADD_CRITERIA , START_ACTION , END_ACTION } from "../../actions/actions.types";
import { INIT_STATE_ADMIN } from "../../initialstates";

const adminReducer = (state = INIT_STATE_ADMIN, action) => {
  switch (action.type) {
    case START_ACTION :
      return {
        ...state,
        loading:true
      }
    case ADD_CRITERIA:
      return {
        ...state,
        criteria: action.payload,
      };
    case END_ACTION : 
      return {
        ...state,
        loading:false
      }
    default:
      return state;
  }
};

export default adminReducer;

import {
    ADD_CRITERIA,
    START_ACTION,
    END_ACTION,
    ADD_CATEGORY,
    SET_SELECTION_PROGRESS,
} from "../../actions/actions.types";
import { INIT_STATE_ADMIN } from "../../initialstates";

const adminReducer = (state = INIT_STATE_ADMIN, action) => {
    switch (action.type) {
        case START_ACTION:
            return {
                ...state,
                loading: true,
            };
        case ADD_CRITERIA:
            return {
                ...state,
                criteriaDetail: action.payload,
            };
        case END_ACTION:
            return {
                ...state,
                loading: false,
            };
        case ADD_CATEGORY:
            return {
                ...state,
                categories: action.payload,
            };

        case SET_SELECTION_PROGRESS:
            return {
                ...state,
                selectionProgress: action.payload,
            };
        default:
            return state;
    }
};

export default adminReducer;

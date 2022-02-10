import {
    DASHBOARD, WALLET,
    TRANSACTIONS, DATA_BANK,
    CHART_SUPPORT, SETTINGS,
    CHANGE_PAGE,
    SHOW_EVENT,
  } from '../../actions/actions.types';

  const INIT_STATE = {
    loading: false,
    showPage: 'Overview',
    alert:{
      success:false, 
      message:null,
       autoClose:false,
        action:false, 
      },
      path:1
};

 const businessReducer = (state = INIT_STATE, action)=>{

    switch (action.type) {

        case DASHBOARD:
            return {
                ...state,
                showPage: action.payload
            }
            case WALLET:
                return {
                    ...state,
                    showPage: action.payload
            }
            case TRANSACTIONS:
                return {
                    ...state,
                    showPage: action.payload
            }
            case DATA_BANK :
                return {
                    ...state,
                    showPage: action.payload
            }
            case CHART_SUPPORT :
                return {
                    ...state,
                    showPage: action.payload
            }
            case SETTINGS :
                return {
                    ...state,
                    showPage: action.payload
            }

                case CHANGE_PAGE :
                    return {
                        ...state,
                        path:action.payload
                    }

            case SHOW_EVENT :
                return {
                    ...state,
                    showEvent:!state.showEvent
                }

        default:
            return state;

    }

 }

 export default businessReducer;
export const DASHBOARD = 'Dashboard';
export const WALLET = 'Wallet Balance';
export const TRANSACTIONS = 'Tranctions';
export const DATA_BANK = 'Data Bank';
export const CHART_SUPPORT = 'Chat Support';
export const SETTINGS = 'Settings';



export const businessReducers = (state, action) => {

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
        default:
            return state;

    }
}

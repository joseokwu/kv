export const AUTH_START = 'AUTH_START';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_SUCCESS = 'USER_SUCCESS';

export const authReducer = (state, action) =>{
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                loading: true
            }
        case  REGISTER_SUCCESS :
            return {
                ...state,
                loading: false,
                user: action.payload
            }
            case REGISTER_FAIL:
            return {
                ...state,
                error: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                authenticated: true

            }

        case LOGIN_FAIL:
            return {
                ...state,
                loading: false
            }

        case USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                authenticated: true
            }


        default:
            return state
    }
}

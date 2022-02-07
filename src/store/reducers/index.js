import { combineReducers } from 'redux';
import businessReducer from './business';
import authReducer from './auth/index';

const appReducer = combineReducers({
    auth:authReducer,
    business:businessReducer
})


export default appReducer;
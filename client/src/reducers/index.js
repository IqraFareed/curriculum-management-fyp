import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
export default combineReducers({
    // reducers object
    alert,
    auth,
    profile
});
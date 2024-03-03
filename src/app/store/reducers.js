import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../../features//UserSlice/UserSlice.js';

const rootReducer = combineReducers({
    users: userReducer,
});

export default rootReducer;

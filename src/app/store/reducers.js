import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../../features//UserSlice/UserSlice.js'; // Предположим, что userSlice.reducer находится в файле userReducer.js

const rootReducer = combineReducers({
    users: userReducer,
});

export default rootReducer;

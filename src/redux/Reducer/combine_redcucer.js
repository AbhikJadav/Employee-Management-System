import React from 'react';
import {combineReducers} from "redux";
import admin_reducer from "./admin_reducer";
import auth_reducer from "./auth_reducer";
import employee_reducer from "./employee_reducer";
const rootReducer = combineReducers({
    reducer:admin_reducer,
    signup_reducer:auth_reducer,
    employee_reducer:employee_reducer,

})

export default rootReducer;

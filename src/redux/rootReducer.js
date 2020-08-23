import {combineReducers} from "redux";
import {authentication} from "./reducers/authentication";
import {registration} from "./reducers/registration";
import {alertMessageReducer} from "./reducers/alertMessageReducer";

export const rootReducer = combineReducers({
    authentication: authentication,
    registration: registration,
    alertMessage: alertMessageReducer
})
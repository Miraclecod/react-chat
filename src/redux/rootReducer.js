import {combineReducers} from "redux";
import {authentication} from "./reducers/authentication";
import {registation} from "./reducers/registation";
import {alertMessageReducer} from "./reducers/alertMessageReducer";

export const rootReducer = combineReducers({
    authentication: authentication,
    regi: registation,
    alerM: alertMessageReducer
})
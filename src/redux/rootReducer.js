import {combineReducers} from "redux";
import user from "./reducers/user";
import registation from "./reducers/registation";
import alertMessageReducer from "./reducers/alertMessageReducer";

export const rootReducer = combineReducers({
    user,
    registation,
    alertMessageReducer
})
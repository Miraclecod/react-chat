import {combineReducers} from "redux";
import user from "./reducers/user";
import registation from "./reducers/registation";

export const rootReducer = combineReducers({
    user,
    registation
})
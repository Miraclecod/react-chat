import {userService} from "../service/userService";
import {alertMessageActions} from "./alertMessage";
import {userConstant} from "../constant/userConstant";

export const userActions = {
    login,
    logout,
    register
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertMessageActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstant.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstant.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstant.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstant.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertMessageActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertMessageActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstant.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstant.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstant.REGISTER_FAILURE, error } }
}
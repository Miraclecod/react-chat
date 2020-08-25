import React from "react";
import {Redirect, Route} from "react-router";
import {useSelector} from "react-redux";

// @ts-ignore
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
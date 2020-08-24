import React from "react";
import {Redirect, Route} from "react-router";
import {useSelector} from "react-redux";

function PrivateRoute({ component: Home}) {

    const auth = useSelector(state => state.authentication.loggedIn);

    return (
        <Route>
            render={({location}) =>
            auth ? (
                Home
            ) : (
                <Redirect to={{
                    pathname: "/login",
                    state: {from: location}
                }}

                />
            )
        }
        </Route>
    );
}
export default PrivateRoute;
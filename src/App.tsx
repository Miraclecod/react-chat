import React from "react"
import { useDispatch, useSelector } from "react-redux"
 import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom"
 import { createBrowserHistory } from "history"
 
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import NotFound from "./Pages/NotFound"
import {PrivateRoute} from "./router/PrivateRoute"
import Messages from "./Pages/Messages"

const App: React.FC = () => {

    return(
            <Router>
                <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route path="/login" component={Login}></Route>
                    <Route path="/messages" component={Messages} />
                    <Route path="/register" component={Register} ></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </Router>
    );
}

export default App;
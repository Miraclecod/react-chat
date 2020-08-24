import React from "react"
import { useDispatch, useSelector } from "react-redux"
 import { Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom"
 import { createBrowserHistory } from "history"
 
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import NotFound from "./Pages/NotFound"
import PrivateRouter from "./router/PrivateRoute"

const App: React.FC = () => {

    const history = createBrowserHistory();

    console.log(history)
    React.useEffect( () => {

    },[])

    return(
        <>
            <Router history={history}>
                <Switch>
                    <Redirect exact from="/" to="/login" ></Redirect>
                    <Route path="/login" component={Login}></Route>
                    <Route exact path="/register" component={Register} ></Route>
                    <Route exact path="*" component={NotFound}></Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
import React from "react"
import { useDispatch, useSelector } from "react-redux"
 import { Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
// import { createBrowserHistory } from "history"
 
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from './Pages/Register'

const App = () => {

    //@ts-ignore
    const fg = useSelector(state => state.authentication.loggedIn)

    //const history = createBrowserHistory();

    React.useEffect( () => {
        // history.listen((location, action) => {

        // });
        fg
    },[])

    return(
        <>
        {fg ? (
            <Home /> ):
            ( <Login />
            )}
            {/* <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} ></Route>
                    <Route exact path="/register" component={Register} ></Route>
                    <Route path="/login" component={Home} ></Route>
                </Switch>
            </BrowserRouter> */}
        </>
    );
}

export default App
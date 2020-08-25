import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {applyMiddleware, createStore, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import {Router} from "react-router-dom"
import thunkMiddleware from "redux-thunk"
//@ts-ignore
import { rootReducer } from "./redux/rootReducer";
import App from "./App";
// @ts-ignore
import Saga from "./sagas/index";
import "./styles/main.sass";
import {Router} from "react-router";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();
//const sagaMiddleware = createSagaMiddleware()

 const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunkMiddleware
    ),
     //@ts-ignore
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 ))
//sagaMiddleware.run(Saga)

ReactDOM.render(
    <Provider store={store}>
        {/*<Router history={history}>*/}
        <App />
        {/*</Router>*/}
    </Provider>,
    document.getElementById("app")
);

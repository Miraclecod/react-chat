import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
// @ts-ignore
import { rootReducer } from "./redux/rootReducer"
import Login from "./Pages/Login";
// @ts-ignore
import Saga from "./sagas/index"


//const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer)
//sagaMiddleware.run(Saga)

ReactDOM.render(
    <Provider store={store}>
        <Login />,
    </Provider>,
    document.getElementById("app")
);

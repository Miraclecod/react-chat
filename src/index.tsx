import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./redux/rootReducer"
import Login from "./Pages/Login";
import Saga from "./sagas/index"


//const sagaMiddleware = createSagaMiddleware()

//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

//sagaMiddleware.run(Saga)

ReactDOM.render(
    //<Provider store={store}>
        <Login />,
    //</Provider>,
    document.getElementById("app")
);

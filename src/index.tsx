import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {applyMiddleware, createStore, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import thunkMiddleware from "redux-thunk"
//@ts-ignore
import { rootReducer } from "./redux/rootReducer";
import App from "./App";
// @ts-ignore
import Saga from "./sagas/index";
import "./styles/main.sass";


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
        <App />
    </Provider>,
    document.getElementById("app")
);

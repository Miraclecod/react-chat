import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import  { createStore } from "redux";
import { Hello } from "./components/Hello";
import Login from "./Pages/Login"


ReactDOM.render(
  <Login />,
  document.getElementById("app")
);

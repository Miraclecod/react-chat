import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import  { createStore } from "redux";
import { Hello } from "./components/Hello";



ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("app")
);

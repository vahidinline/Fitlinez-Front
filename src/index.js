import React from "react";
import ReactDOM from "react-dom";
import '../src/fonts/IRANSansWeb.ttf'
import '../src/fonts/IRANSansWeb.woff'
import "./index.css";
import App from "./App";
import { AlertContainer, alert } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
//console.log("SUPERMAN", process.env.REACT_APP_NAME);
ReactDOM.render(
  <React.StrictMode>
   
    <App />
    <AlertContainer floatingTime={5000} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom";
import { DataLayer } from "./ContextAPI/data-layer";
import reducer, { initialState } from "./ContextAPI/reducer";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BreakpointsProvider } from '../src';

const mountNode = document.getElementById("app");
ReactDOM.render(
  <BreakpointsProvider>
    <App name="User" />
  </BreakpointsProvider>
  , mountNode
);

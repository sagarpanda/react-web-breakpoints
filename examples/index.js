import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BreakpointsProvider } from '../src';

const mountNode = document.getElementById("app");
ReactDOM.render(
  <BreakpointsProvider breakpoints={{ sm: 0, md: 768, lg: 1024 }}>
    <App name="Sagar" />
  </BreakpointsProvider>
  , mountNode
);

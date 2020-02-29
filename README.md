# React Web Breakpoints
Responsive design based on breakpoints
### NPM Installation
```sh
$ npm install react-web-breakpoints
```
### Use
```javascript
import {
  BreakpointsProvider,
  useBreakpoints,
  withBreakpoints,
  Context
} from 'react-web-breakpoints';
```
```javascript
// main.js - Provider
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BreakpointsProvider } from 'react-web-breakpoints';

const mountNode = document.getElementById("app");
ReactDOM.render(
  <BreakpointsProvider breakpoints={{ sm: 0, md: 768, lg: 1024 }}>
    <App name="User" />
  </BreakpointsProvider>
  , mountNode
);
```
```javascript
// App.js with Hooks
import React from "react";
import { useBreakpoints } from 'react-web-breakpoints';

const App = ({ name, media }) => {
  const media = useBreakpoints();
  return <h1>Hello {name} - Screen {media}</h1>;
};

export default App;
```
```javascript
// App.js with HOC
import React from "react";
import { withBreakpoints } from 'react-web-breakpoints';

const App = ({ name, media }) => {
  return <h1>Hello {name} - Screen {media}</h1>;
};

export default withBreakpoints(App);
```
### BreakpointsProvider - Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| breakpoints | object | { sm: 0, md: 768, lg: 1024 }
| defaultBreakpoint | string | null

### Source Code Run

Install the dependencies and devDependencies and start the server.

```sh
$ git clone git@github.com:sagarpanda/react-web-breakpoints.git
$ cd react-web-breakpoints
$ npm install
$ npm start
```

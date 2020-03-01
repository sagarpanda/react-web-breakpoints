# React Web Breakpoints
Responsive design based on breakpoints
[Click here to see the demo.](https://sagarpanda.github.io/react-web-breakpoints/)
### Install
```sh
# with npm
$ npm install react-web-breakpoints --save
# or with yarn
$ yarn add react-web-breakpoints
```
### Usage
```javascript
import {
  BreakpointsProvider,
  useBreakpoints,
  withBreakpoints,
  BreakShowAt
} from 'react-web-breakpoints';
```
BreakpointsProvider
```javascript
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
With Hooks - useBreakpoints (it returns current breakpoint e.g. lg)
```javascript
import React from "react";
import { useBreakpoints } from 'react-web-breakpoints';

const App = ({ name, media }) => {
  const media = useBreakpoints();
  return <h1>Hello {name} - Screen {media}</h1>;
};

export default App;
```
With HOC - withBreakpoints (wrapped component i.e. App receives new props `media`)
```javascript
import React from "react";
import { withBreakpoints } from 'react-web-breakpoints';

const App = ({ name, media }) => {
  return <h1>Hello {name} - Screen {media}</h1>;
};

export default withBreakpoints(App);
```
With BreakShowAt - renders its children when current breakpoint (say lg) match with its props (i.e. md and lg)
```javascript
import React from "react";
import { BreakShowAt } from 'react-web-breakpoints';

const App = ({ name }) => {
  return (
    <BreakShowAt md lg>
      <div>This content shows for md and lg screens.</div>
    </BreakShowAt>
  );
};

export default App;
```
### BreakpointsProvider - Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| breakpoints | object | { sm: 0, md: 768, lg: 1024 } | By default 0 < sm < 768, 768 < md < 1024, 1024 < lg. Object structure `{ [string]: [number], ... }` e.g. { mobile: 0, tablet: 768, desktop: 1024 } |
| defaultBreakpoint | string | null | By default null. For initial render or if window width does not fall under any range mentioned in `breakpoints` props. |

### Source Code Run

Install the dependencies and devDependencies and start the server.

```sh
$ git clone git@github.com:sagarpanda/react-web-breakpoints.git
$ cd react-web-breakpoints
$ npm install
$ npm start
```

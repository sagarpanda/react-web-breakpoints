import React, { useContext } from "react";
import { hot } from 'react-hot-loader/root';
import { useBreakpoints, withBreakpoints, BreakShowAt } from '../src';

const App = ({ name, media }) => {
  return (
    <div>
      <h1>Hello {name},</h1>
      <div>Set breakpoints in BreakpointsProvider: <br />{'{ sm: 0, md: 768, lg: 1024 }'}</div>
      <pre>
        {
          `
  <BreakpointsProvider breakpoints={{ sm: 0, md: 768, lg: 1024 }}>
    <App name="User" />
  </BreakpointsProvider>
          `
        }
      </pre>
      <div>Current Screen is <b>{media}</b>.</div>
      <pre>
        {
          `
  const App = ({ name, media }) => {
    return <div>Current Screen is <b>{media}</b>.</div>;
  };
  export default withBreakpoints(App);
          `
        }
      </pre>
      <BreakShowAt md lg>
        <div>This content shows for <b>md</b> and <b>lg</b> screens.</div>
        <pre>
          {
            `
  <BreakShowAt md lg>
    <div>This content shows for <b>md</b> and <b>lg</b> screens.</div>
  </BreakShowAt>
            `
          }
        </pre>
      </BreakShowAt>
      <div>
        <h2>Code Snippet - 1</h2>
        <pre>
          {
`  <BreakpointsProvider breakpoints={{ mobile: 0, tablet: 768, desktop: 1024 }}>
    <App name="User" />
  </BreakpointsProvider>`
          }
        </pre>
        <pre>
          {
`  <BreakShowAt tablet destop>
    <div>This content shows for md and lg screens.</div>
  </BreakShowAt>`
          }
        </pre>
      </div>
      <div>
        <h2>Code Snippet - 2</h2>
        <pre>
          {
`  <BreakpointsProvider breakpoints={{ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 }}>
    <App name="User" />
  </BreakpointsProvider>`
          }
        </pre>
        <pre>
          {
`  <BreakShowAt lg xl>
    <div>This content shows for lg and xl screens.</div>
  </BreakShowAt>
            `
          }
        </pre>
      </div>
    </div>
  )
};

export default hot(withBreakpoints(App));

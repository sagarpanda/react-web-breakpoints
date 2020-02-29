import React, { useContext } from "react";
import { hot } from 'react-hot-loader/root';
import { useBreakpoints, withBreakpoints } from '../src';

const App = ({ name, media }) => {
  return <h1>Hello {name} - Screen {media}</h1>;
};

export default hot(withBreakpoints(App));

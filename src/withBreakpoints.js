import React from "react";
import useBreakpoints from './useBreakpoints';

const withBreakpoints = (Component) => {
  return (props) => {
    const media = useBreakpoints();
    return <Component {...props} media={media} />
  };
}

export default withBreakpoints;

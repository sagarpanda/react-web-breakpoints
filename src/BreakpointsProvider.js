import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Context from './Context';

const useWinResize = () => {
  const [size, setSize] = useState(0);
  useEffect(() => {
    setSize(window.innerWidth);
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return size;
};

const getMedia = (winSize, breakpoints, defaultPoint) => {
  let media = defaultPoint;
  if (winSize > 0) {
    const keys = Object.keys(breakpoints);
    const sortedKeys = keys.sort((a, b) => breakpoints[b] - breakpoints[a]);
    let count = 0;
    while (count < keys.length) {
      const key = sortedKeys[count];
      if (winSize >= breakpoints[key]) {
        media = key;
        break;
      } else {
        count += 1;
      }
    }
  }
  return media;
};

const BreakpointsProvider = ({ children, breakpoints, defaultBreakpoint }) => {
  const winSize = useWinResize();
  const media = getMedia(winSize, breakpoints, defaultBreakpoint);

  return (
    <Context.Provider value={media}>
      {children}
    </Context.Provider>
  );
};


BreakpointsProvider.defaultProps = {
  breakpoints: { sm: 0, md: 768, lg: 1024 },
  defaultBreakpoint: null
};

BreakpointsProvider.propTypes = {
  breakpoints: PropTypes.object,
  defaultBreakpoint: PropTypes.string,
  children: PropTypes.any
};

export default BreakpointsProvider;

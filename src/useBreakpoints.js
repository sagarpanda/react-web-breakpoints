import React, { useContext } from "react";
import Context from '../src/Context';

const useBreakpoints = () => {
  const value = useContext(Context);
  return value;
};

export default useBreakpoints;

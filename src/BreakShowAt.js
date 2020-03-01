import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import useBreakpoints from './useBreakpoints';

const BreakShowAt = ({ children, ...rest }) => {
  const media = useBreakpoints();
  return <>{rest[media] && children}</>;
};

export default BreakShowAt;

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.string,
};

const defaultProps = {
  data: null,
};

const NumberDisplay = (props) => {
  return (
    <div className="number-display">
      <p className="number-data">{props.data}</p>
    </div>
  );
};

NumberDisplay.propTypes = propTypes;
NumberDisplay.defaultProps = defaultProps;

export default NumberDisplay;

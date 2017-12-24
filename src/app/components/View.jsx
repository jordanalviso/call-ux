import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const View = (props) => {
  return (
    <div className="view">
      {props.children}
    </div>
  );
};

View.propTypes = propTypes;
View.defaultProps = defaultProps;

export default View;

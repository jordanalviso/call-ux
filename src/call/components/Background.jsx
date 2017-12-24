import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
};

const defaultProps = {
  children: null,
};

const Background = props => (
  <div className={props.className}>
    <div className="overlay" />
    {props.children}
  </div>
);

Background.propTypes = propTypes;
Background.defaultProps = defaultProps;

export default Background;

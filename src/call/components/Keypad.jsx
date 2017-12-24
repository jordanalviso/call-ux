import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  calling: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function layout(props) {
  return {
    visibility: !props.calling ? 'visible': 'hidden',
  };
}

const Keypad = (props) => {
  return (
    <div className="keypad" style={layout(props)}>
      {props.children}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    calling: state.calling,
  };
}

Keypad.propTypes = propTypes;
Keypad.defaultProps = defaultProps;

export default connect(mapStateToProps)(Keypad);

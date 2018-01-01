import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pressCallKey } from 'call/actions/key';
import { clearNumber } from 'call/actions/number';
import {
  resetTimer,
  startTimer,
  tickTimer,
} from 'call/actions/time';

const propTypes = {
  calling: PropTypes.bool,
  clearNumber: PropTypes.func.isRequired,
  pressCallKey: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  tickTimer: PropTypes.func.isRequired,
};

const defaultProps = {
  calling: false,
};

export class CallKey extends React.Component {
  constructor(props) {
    super(props);
    this.layoutIcon = this.layoutIcon.bind(this);
    this.layoutKey = this.layoutKey.bind(this);
    this.pressKey = this.pressKey.bind(this);
  }

  layoutIcon() {
    if (this.props.calling) {
      return {
        transition: 'transform 400ms ease',
        transform: 'rotate3d(0, 0, 1, 135deg)',
      };
    }
    return {
      transition: 'transform 400ms ease',
      transform: 'rotate3d(0, 0, 1, 0deg)',
    };
  }

  layoutKey() {
    if (this.props.calling) {
      return {
        transition: 'opacity 400ms ease',
        opacity: 1,
      };
    }
    return {
      transition: 'opacity 400ms ease',
      opacity: 0.0001,
    };
  }

  pressKey() {
    if (this.props.calling) {
      this.props.clearNumber();
      this.props.resetTimer();
    } else {
      this.props.startTimer(setInterval(this.props.tickTimer, 1000));
    }
    this.props.pressCallKey();
  }

  render() {
    return (
      <div className="call-key">
        <div className="call-key-red" style={this.layoutKey()} />
        <i className="material-icons call-key-icon" style={this.layoutIcon()}>call</i>
        <div className="event-target-layer" onMouseDown={this.pressKey} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    calling: state.calling,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clearNumber,
    pressCallKey,
    resetTimer,
    startTimer,
    tickTimer,
  }, dispatch);
}

CallKey.propTypes = propTypes;
CallKey.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(CallKey);

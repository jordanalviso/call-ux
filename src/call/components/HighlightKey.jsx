import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  highlightKey,
  pressDeleteKey,
  pressKey,
  releaseKey,
} from 'call/actions/key';

const propTypes = {
  id: PropTypes.number,
  highlightKey: PropTypes.func.isRequired,
  highlightKeyPool: PropTypes.object,
  pressDeleteKey: PropTypes.func.isRequired,
  pressKey: PropTypes.func.isRequired,
  releaseKey: PropTypes.func.isRequired,
};

const defaultProps = {
  id: null,
};

export class HighlightKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadingDown: false,
      keyReleased: false,
    };
    this.cancelHighlight = this.cancelHighlight.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.layout = this.layout.bind(this);
  }
  cancelHighlight() {
    const busy = this.props.highlightKeyPool.busy;
    const element = this.props.id;
    if (busy[element]) {
      if (busy[element].key !== 'delete') {
        this.props.pressKey(busy[element].key);
      } else {
        this.props.pressDeleteKey();
      }
      this.props.highlightKey(busy[element].key);
      this.props.releaseKey(element);
      this.setState({
        keyReleased: false,
        fadingDown: false,
      });
    }
  }
  handleMouseUp() {
    this.setState({
      keyReleased: true,
    });
  }
  handleMouseLeave() {
    this.setState({
      keyReleased: true,
    });
  }
  handleTransitionEnd() {
    if (this.state.keyReleased && this.state.fadingDown) {
      // end of fade down transition
      this.props.releaseKey(this.props.id);
      this.setState({
        fadingDown: false,
        keyReleased: false,
      });
    // end of fade up transition or
    // key has not been released -- user is holding onto it
    } else {
      this.setState({ fadingDown: true });
    }
  }
  layout() {
    const busy = this.props.highlightKeyPool.busy;
    const element = this.props.id;

    if (busy[element]) {
      if (this.state.fadingDown && this.state.keyReleased) {
        // fade down
        return {
          transform: busy[element].transform,
          transition: 'opacity 400ms ease',
          opacity: 0.0001,
        };
      }
      // fade up
      return {
        transform: busy[element].transform,
        transition: 'opacity 100ms ease',
        opacity: 1,
      };
    }
    // reset key
    return {
      transform: 'translate3d(-78px, 0px, 0)',
      opacity: 0.0001,
    };
  }
  render() {
    return (
      <div
        className="highlight-key"
        onMouseDown={this.cancelHighlight}
        onMouseLeave={this.handleMouseLeave}
        onMouseUp={this.handleMouseUp}
        onTransitionEnd={this.handleTransitionEnd}
        role="button"
        style={this.layout()}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    highlightKeyPool: state.highlightKeyPool,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    highlightKey,
    pressDeleteKey,
    pressKey,
    releaseKey,
  }, dispatch);
}

HighlightKey.propTypes = propTypes;
HighlightKey.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(HighlightKey);

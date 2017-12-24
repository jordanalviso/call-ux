import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  highlightKey,
  pressKey
} from 'call/actions/key';

const propTypes = {
  alias: PropTypes.string,
  highlightKey: PropTypes.func.isRequired,
  pressKey: PropTypes.func.isRequired,
  special: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  alias: null,
  special: false,
  value: null,
};

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.pressKey = this.pressKey.bind(this);
    this.renderKey = this.renderKey.bind(this);
  }

  pressKey() {
    this.props.pressKey(this.props.value);
    this.props.highlightKey(this.props.value);
  }

  renderKey() {
    if (this.props.special) {
      return <p className="key-special">{this.props.value}</p>;
    }
    return (
      <div>
        <p className="key-value">{this.props.value}</p>
        <p className="key-alias">{this.props.alias}</p>
      </div>
    );
  }
  render() {
    return (
      <div className="key">
        {this.renderKey()}
        <div
          className="event-target"
          onMouseDown={this.pressKey}
          role="button"
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ highlightKey, pressKey }, dispatch);
}

Key.propTypes = propTypes;
Key.defaultProps = defaultProps;

export default connect(null, mapDispatchToProps)(Key);

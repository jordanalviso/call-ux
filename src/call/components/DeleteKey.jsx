import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  highlightKey,
  pressDeleteKey,
} from 'call/actions/key';

const propTypes = {
  highlightKey: PropTypes.func.isRequired,
  pressDeleteKey: PropTypes.func.isRequired,
};

const defaultProps = {

};

class DeleteKey extends React.Component {
  constructor(props) {
    super(props);
    this.pressKey = this.pressKey.bind(this);
  }

  pressKey() {
    this.props.pressDeleteKey();
    this.props.highlightKey('delete');
  }

  render() {
    return (
      <div className="delete-key">
        <i className="material-icons delete-key-icon">backspace</i>
        <div className="event-target" onMouseDown={this.pressKey} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ highlightKey, pressDeleteKey }, dispatch);
}

DeleteKey.propTypes = propTypes;
DeleteKey.defaultProps = defaultProps;

export default connect(null, mapDispatchToProps)(DeleteKey);

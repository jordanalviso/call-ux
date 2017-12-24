import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Background from 'call/components/Background';
import CallKey from 'call/components/CallKey';
import CallTime from 'call/components/CallTime';
import DeleteKey from 'call/components/DeleteKey';
import HighlightKeyPool from 'call/components/HighlightKeyPool';
import Key from 'call/components/Key';
import Keypad from 'call/components/Keypad';
import NumberDisplay from 'call/components/NumberDisplay';
import View from 'app/components/View';

const propTypes = {
  appReady: PropTypes.bool.isRequired,
  number: PropTypes.string,
  time: PropTypes.number,
};

const defaultProps = {
  number: '',
  time: 0,
};

const App = (props) => {
  if (props.appReady) {
    return (
      <div>
        <Background className="starry-night" />
        <View>
          <NumberDisplay data={props.number} />
          <CallTime data={props.time} />
          <Keypad>
            <Key value="1" />
            <Key value="2" alias="ABC" />
            <Key value="3" alias="DEF" />
            <Key value="4" alias="GHI" />
            <Key value="5" alias="JKL" />
            <Key value="6" alias="MNO" />
            <Key value="7" alias="PQRS" />
            <Key value="8" alias="TUV" />
            <Key value="9" alias="WXYZ" />
            <Key value="＊" special />
            <Key value="0" alias="+" />
            <Key value="#" special />
            <DeleteKey />
            <HighlightKeyPool />
          </Keypad>
          <CallKey />
        </View>
      </div>
    );
  }
  return null;
};

function mapStateToProps(state) {
  return {
    appReady: state.appReady,
    calling: state.calling,
    number: state.number,
    time: state.time.counter,
  };
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default connect(mapStateToProps)(App);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  data: PropTypes.number,
};

const defaultProps = {
  data: null,
};

function convertToTime(count) {
  const hours = Math.floor((count % 86400) / 3600);
  let minutes = Math.floor((count % 3600) / 60);
  let seconds = Math.floor(count % 60);

  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  if (hours) return `${hours}:${minutes}:${seconds}`;
  return `${minutes}:${seconds}`;
}

function layout(props) {
  return {
    visibility: props.calling ? 'visible' : 'hidden',
  };
}

export const CallTime = (props) => {
  return (
    <div className="time" style={layout(props)}>
      <p className="time-data">{convertToTime(props.data)}</p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    calling: state.calling,
  };
}

CallTime.propTypes = propTypes;
CallTime.defaultProps = defaultProps;

export default connect(mapStateToProps)(CallTime);

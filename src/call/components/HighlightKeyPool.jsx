import React from 'react';
import PropTypes from 'prop-types';
import HighlightKey from 'call/components/HighlightKey';

import { HIGHLIGHT_KEY_POOL_SIZE } from 'call/constants/highlightKeyPool';

const propTypes = {};
const defaultProps = {};

function generatePool() {
  const pool = [];
  for (let i = 0; i < HIGHLIGHT_KEY_POOL_SIZE; i++) {
    pool.push(i);
  }
  return pool.map((id) => {
    return <HighlightKey key={id} id={id} />;
  });
}

const HighlightKeyPool = (props) => {
  return (
    <div>
      {generatePool()}
    </div>
  );
};

HighlightKeyPool.propTypes = propTypes;
HighlightKeyPool.defaultProps = defaultProps;

export default HighlightKeyPool;


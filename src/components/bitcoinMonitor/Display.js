import React from 'react';
import PropTypes from 'prop-types';
import CurrentPrice from './CurrentPrice';
import PriceHistory from './PriceHistory';

const Display = ({ currentPrice, isLoading, error, prices }) => {
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error: {error}! Please try again.</div>;
  }
  return (
    <div className="mt-md-5 mx-md-5">
      <CurrentPrice currentPrice={currentPrice} />
      <PriceHistory prices={prices} />
    </div>
  );
};

Display.defaultProps = {
  currentPrice: {}
};

Display.propTypes = {
  currentPrice: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  prices: PropTypes.object
};

export default Display;

import React from 'react';
import PropTypes from 'prop-types';

const CurrentPrice = ({ currentPrice }) => {
  const usd = () => {
    return currentPrice && currentPrice.bpi && currentPrice.bpi.USD
      ? currentPrice.bpi.USD.rate_float
      : '';
  };

  return <div>{usd()}</div>;
};

CurrentPrice.defaultProps = {
  currentPrice: {}
};
CurrentPrice.propTypes = {
  currentPrice: PropTypes.object
};

export default CurrentPrice;

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const CurrentPrice = ({ currentPrice }) => {
  const usd = () => {
    return currentPrice && currentPrice.bpi && currentPrice.bpi.USD
      ? currentPrice.bpi.USD.rate_float
      : '';
  };

  const lastUpdated = () => {
    return currentPrice && currentPrice.time && currentPrice.time.updated
      ? moment(currentPrice.time.updatedISO).format('YYYY-MM-DD, h:mm:ss a')
      : '';
  };

  return (
    <div className="current-price">
      <span className="label">Current Price:</span>
      {usd()}
      <div className="last-updated">Last Updated: {lastUpdated()}</div>
    </div>
  );
};

CurrentPrice.defaultProps = {
  currentPrice: {}
};
CurrentPrice.propTypes = {
  currentPrice: PropTypes.object
};

export default CurrentPrice;

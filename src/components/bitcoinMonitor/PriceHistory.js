import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const PriceHistory = ({ prices }) => {
  return (
    <div>
      <h6>Past Week</h6>
      <table className="table">
        <thead>
          <tr>
            <th className="text-uppercase text-center">Date</th>
            <th className="text-uppercase text-center">Price</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {_.keys(prices).map((key) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{prices[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

PriceHistory.propTypes = {
  prices: PropTypes.object
};

export default PriceHistory;

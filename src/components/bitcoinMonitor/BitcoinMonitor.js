import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Display from './Display';

class BitcoinMonitor extends React.Component {
  state = {
    currentPrice: null,
    isLoading: false,
    error: null,
    prices: null,
    startDate: moment()
      .subtract(7, 'days')
      .format('YYYY-MM-DD'),
    endDate: moment()
      .subtract(1, 'days')
      .format('YYYY-MM-DD')
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    this.getCurrentPrice();
    this.getPrices();
  }

  getCurrentPrice = async () => {
    try {
      const currentPrice = await axios.get(
        'https://api.coindesk.com/v1/bpi/currentprice.json',
        {}
      );
      this.setState({ isLoading: false });
      this.setState({ currentPrice: currentPrice.data });
    } catch (error) {
      this.setState({ isLoading: false });
      this.setState({ error: error.message });
    }
  };

  getPrices = async () => {
    try {
      const prices = await axios.get(
        `https://api.coindesk.com/v1/bpi/historical/close.json?start=${
          this.state.startDate
        }&end=${this.state.endDate}`,
        {}
      );
      this.setState({ isLoading: false });
      this.setState({ prices: prices.data.bpi });
    } catch (error) {
      this.setState({ isLoading: false });
      this.setState({ error: error.message });
    }
  };

  // https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05

  render() {
    return (
      <Display
        currentPrice={this.state.currentPrice}
        isLoading={this.state.isLoading}
        error={this.state.error}
        prices={this.state.prices}
      />
    );
  }
}

export default BitcoinMonitor;

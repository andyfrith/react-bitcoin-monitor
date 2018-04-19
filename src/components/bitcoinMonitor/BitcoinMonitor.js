import React from 'react';
import moment from 'moment';
import BitcoinService from '../../services/BitcoinService';
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
      const currentPrice = await BitcoinService.getCurrentPrice();
      this.setState({ isLoading: false });
      this.setState({ currentPrice });
    } catch (error) {
      this.setState({ isLoading: false });
      this.setState({ error: error.message });
    }
  };

  getPrices = async () => {
    try {
      const prices = await BitcoinService.getPrices(
        this.state.startDate,
        this.state.endDate
      );
      this.setState({ isLoading: false });
      this.setState({ prices: prices.bpi });
    } catch (error) {
      this.setState({ isLoading: false });
      this.setState({ error: error.message });
    }
  };

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

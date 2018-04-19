import axios from 'axios';

const API = 'https://api.coindesk.com/v1/bpi/';

class BitcoinService {
  static getCurrentPrice = () =>
    axios
      .get(`${API}currentPrice.json`, {})
      .then((response) => response.data, (error) => error.response.status);

  static getPrices = (startDate, endDate) =>
    axios
      .get(`${API}historical/close.json?start=${startDate}&end=${endDate}`, {})
      .then((response) => response.data, (error) => error.response.status);
}

export default BitcoinService;

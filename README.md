# React Bitcoin Monitor

An app that monitors changes in the _Bitcoin Price Index (BPI)_.

The BPI will be shown for the _USD_ currency.

_Bitcoin Monitor_ makes use of the _[CoinDesk Bitcoin Price Index API]_. Go [here](https://www.coindesk.com/price/) for more price information by CoinDesk.

The application is composed of the following components:

* App - The main application component

* Header - A heading that displays application title

* BitcoinMonitor - The primary (root) component that manages state for itself and all underlying components. It is also responsible for connecting to _BitcoinService_ to retrieve _Bitcoin Price Index_ pricing data.

* Display - Displays the CurrentPrice and PriceHistory components

* CurrentPrice - Displays the current pricing _Bitcoin Price Index_ data for USD.

* PriceHistory - Displays the _Bitcoin Price Index_ pricing data for USD currency for the past seven days.

The following services are used to obtain _Bitcoin Price Index_ pricing data:

* BitcoinService

  A wrapper that is responsible for integrating with the [CoinDesk Bitcoin Price Index API]

Features:

* Show Current BPI for USD currency
* Show BPI for the past seven days for USD currency

This project also demonstrates:

* a typcial React project layout structure
* babel setup and configuration
* webpack setup and configuration
* eslint setup and configuration
* SCSS setup and configuration
* [CoinDesk Bitcoin Price Index API] integration

**Screenshots:**

![](https://github.com/andyfrith/react-bitcoin-monitor/blob/master/public/img/ReactBitcoinMonitor.png)

---

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [CoinDesk Bitcoin Price Index API] - Provides Bitcoin Price Index data

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

* Clone _'react-bitcoin-monitor'_ repository from GitHub

  ```bash
  git clone git@github.com:andyfrith/react-bitcoin-monitor.git
  ```

* Install node modules

  ```bash
  cd react-bitcoin-monitor
  yarn install
  ```

### Run

* Run start

  ```bash
  yarn start
  ```

---

## Links

* [**Portfolio**](http://goodapplemedia.com): Visit portfolio site at http://goodapplemedia.com.
* [**Andy Frith**](http://andyfrith.com): Learn more about the site developer at http://andyfrith.com.

[coindesk bitcoin price index api]: https://www.coindesk.com/api/

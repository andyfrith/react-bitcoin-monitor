import React from 'react';
import Header from './header/Header';
import BitcoinMonitor from './bitcoinMonitor/BitcoinMonitor';

const App = () => (
  <main className="App">
    <Header title="Bitcoin Monitor" />
    <BitcoinMonitor />
  </main>
);

export default App;

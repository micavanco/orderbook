import React from 'react';
import './app.scss';
import { Orderbook } from "./components/orderbook/orderbook";

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <Orderbook/>
    </div>
  );
}

export default App;

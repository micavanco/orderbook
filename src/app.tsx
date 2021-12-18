import React from 'react';
import './app.scss';
import { Orderbook } from "./components/orderbook/orderbook";
import { StoreProvider } from './context/store.context';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <StoreProvider>
        <Orderbook/>
      </StoreProvider>
    </div>
  );
}

export default App;

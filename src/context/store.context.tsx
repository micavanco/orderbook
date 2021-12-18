import React, { createContext, useEffect, useState } from 'react';
import { Order } from '../models/order.model';
import { Currency } from '../models/currency.model';
import WebsocketService from '../services/websocket.service';
import RestApiService from '../services/rest-api.service';
import { Store } from '../types/store.type';

export const StoreContext = createContext<Store | null>(null);
const websocketService = new WebsocketService();
const restApiService = new RestApiService();

export const StoreProvider: React.FC = ({ children }) => {
  const [bidList, setBidList] = useState<Order[]>([]);
  const [askList, setAskList] = useState<Order[]>([]);
  const [spread, setSpread] = useState<number>(0.0);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [currency, setCurrency] = useState<string>('BTC-PLN');
  const currencyList = ['EUR', 'GBP', 'USDT', 'PLN'];

  useEffect(() => {
    restApiService.getCurrencies().then(data => setCurrencies(data));
    websocketService.connect(currency, onDataChange);
  }, []);

  const onDataChange = (bidListData: Order[], askListData: Order[]): void => {
    setBidList(bidListData);
    setAskList(askListData);

    if (askListData[0] && bidListData[0]) {
      setSpread(parseFloat((parseFloat(askListData[0].rate) - parseFloat(bidListData[0].rate)).toFixed(2)));
    }
  };

  const setOrderCurrency = (value: string): void => {
    websocketService.disconnect();
    websocketService.connect(value, onDataChange);
    setCurrency(value);
    setBidList([]);
    setAskList([]);
    setSpread(0.0);
  };

  return (
    <StoreContext.Provider value={{ bidList, askList, currencies, currency, spread, setOrderCurrency, currencyList }}>
      { children }
    </StoreContext.Provider>
  );
};

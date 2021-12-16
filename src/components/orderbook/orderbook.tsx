import React, { useEffect, useState } from 'react';
import './orderbook.scss';
import { Header } from '../header/header';
import { Table } from '../table/table';
import WebsocketService from '../../services/websocket.service';
import RestApiService from '../../services/rest-api.service';
import { Currency } from '../../models/currency.model';
import { Order } from '../../models/order.model';

const websocketService = new WebsocketService();
const restApiService = new RestApiService();

export const Orderbook: React.FC = () => {
    const [bidList, setBidList] = useState<Order[]>([]);
    const [askList, setAskList] = useState<Order[]>([]);
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [currency, setCurrency] = useState<string>('BTC-PLN');

    useEffect(() => {
        restApiService.getCurrencies().then(data => setCurrencies(data));
        websocketService.connect(currency, onDataChange);
    }, []);

    const onCurrencyChange = (value: string): void => {
      websocketService.disconnect();
      websocketService.connect(value, onDataChange);
      setCurrency(value);
      setBidList([]);
      setAskList([]);
    };

    const onDataChange = (bidListData: Order[], askListData: Order[]) => {
      setBidList(bidListData);
      setAskList(askListData);
    };

    return (
      <div className="orderbook">
          <Header currencies={currencies} onCurrencyChange={onCurrencyChange}/>
          <Table bidList={bidList} askList={askList}/>
      </div>
    );
}

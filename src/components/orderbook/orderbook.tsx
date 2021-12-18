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
    const [spread, setSpread] = useState<number>(0.0);
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
      setSpread(0.0);
    };

    const onDataChange = (bidListData: Order[], askListData: Order[]) => {
      setBidList(bidListData);
      setAskList(askListData);

      if (askListData[0] && bidListData[0]) {
        setSpread(parseFloat((parseFloat(askListData[0].rate) - parseFloat(bidListData[0].rate)).toFixed(2)));
      }
    };

    return (
      <div className="orderbook">
          <Header currencies={currencies} onCurrencyChange={onCurrencyChange} spread={spread}/>
          <Table bidList={bidList} askList={askList} cryptoCurrency={currency.split('-')[0]} currency={currency.split('-')[1]}/>
      </div>
    );
}

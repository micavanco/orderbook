import React from 'react';
import './orderbook.scss';
import { Header } from '../header/header';
import { Table } from '../table/table';

const Orderbook: React.FC = () => (
      <div className="orderbook">
          <Header/>
          <Table/>
      </div>
);

export default Orderbook;

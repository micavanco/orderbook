import React from "react";
import './table.scss';
import { Order } from "../../models/order.model";
import { OrderList } from "../order-list/order-list";

interface TableProps {
    bidList: Order[];
    askList: Order[];
    cryptoCurrency: string;
    currency: string;
}

export const Table: React.FC<TableProps> = ({ bidList, askList, cryptoCurrency, currency  }) => {


  return (
    <div className="table">
      <div className="table__bid">
        <OrderList title={'Bid'} list={bidList} cryptoCurrency={cryptoCurrency} currency={currency}/>
      </div>
      <div className="table__ask">
        <OrderList title={'Ask'} list={askList} cryptoCurrency={cryptoCurrency} currency={currency}/>
      </div>
    </div>
  );
}


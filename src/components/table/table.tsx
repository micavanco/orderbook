import React, { useEffect, useReducer, useState } from 'react';
import { useSpring, animated } from 'react-spring';
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
  const config = {
    from: { opacity: 0, transform: "scale(0)" },
    to: { opacity: 1, transform: "scale(1)" },
    duration: 800
  };
  const [styles, api] = useSpring(() => config);


  useEffect(() => {
    api({ opacity: 0, transform: "scale(0)" });
    setTimeout(() => {
      api({ opacity: 1, transform: "scale(1)" });
    }, 800);
  }, [cryptoCurrency, currency]);


  return (
    <div className="table">
      <animated.div className="table__bid" style={styles}>
        <OrderList title={'Bid'} list={bidList} cryptoCurrency={cryptoCurrency}
                   currency={currency}/>
      </animated.div>
      <div className="table__separator">
      </div>
      <animated.div className="table__ask" style={styles}>
        <OrderList title={'Ask'} list={askList} cryptoCurrency={cryptoCurrency} currency={currency}/>
      </animated.div>
    </div>
  );
}


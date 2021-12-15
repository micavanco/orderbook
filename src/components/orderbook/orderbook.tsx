import React from "react";
import './orderbook.scss';
import { Header } from "../header/header";
import { Table } from "../table/table";
import { Order } from "../../models/order.model";

export const Orderbook: React.FC = () => {
    const bidList: Order[] = [
        {
            "rate": 200776.08,
            "amount": 1.0859,
            "value": 218022.745272,
            "offers": 1
        },
        {
            "rate": 200776.28,
            "amount": 0.3646968,
            "value": 73222.46683190399,
            "offers": 1
        },
        {
            "rate": 200776.29,
            "amount": 0.3954,
            "value": 79386.945066,
            "offers": 1
        },
        {
            "rate": 201000,
            "amount": 0.00149254,
            "value": 300.00054,
            "offers": 1
        },
        {
            "rate": 201000.09,
            "amount": 0.03189861,
            "value": 6411.6234808749,
            "offers": 1
        },
        {
            "rate": 201000.1,
            "amount": 0.09823031,
            "value": 19744.302133031,
            "offers": 1
        },
        {
            "rate": 201000.11,
            "amount": 0.03189861,
            "value": 6411.624118847099,
            "offers": 1
        },
        {
            "rate": 201675.78,
            "amount": 0.0049585,
            "value": 1000.00935513,
            "offers": 1
        },
        {
            "rate": 202000,
            "amount": 0.0167886,
            "value": 3391.2972,
            "offers": 3
        },
        {
            "rate": 202300.98,
            "amount": 0.10835084,
            "value": 21919.4811158232,
            "offers": 1
        }
    ];
    const askList: Order[] = [
        {
            "rate": 200776.08,
            "amount": 1.0859,
            "value": 218022.745272,
            "offers": 1
        },
        {
            "rate": 200776.28,
            "amount": 0.3646968,
            "value": 73222.46683190399,
            "offers": 1
        },
        {
            "rate": 200776.29,
            "amount": 0.3954,
            "value": 79386.945066,
            "offers": 1
        },
        {
            "rate": 201000,
            "amount": 0.00149254,
            "value": 300.00054,
            "offers": 1
        },
        {
            "rate": 201000.09,
            "amount": 0.03189861,
            "value": 6411.6234808749,
            "offers": 1
        },
        {
            "rate": 201000.1,
            "amount": 0.09823031,
            "value": 19744.302133031,
            "offers": 1
        },
        {
            "rate": 201000.11,
            "amount": 0.03189861,
            "value": 6411.624118847099,
            "offers": 1
        },
        {
            "rate": 201675.78,
            "amount": 0.0049585,
            "value": 1000.00,
            "offers": 1
        },
        {
            "rate": 202000,
            "amount": 0.0167886,
            "value": 3391.2972,
            "offers": 3
        },
        {
            "rate": 202300.98,
            "amount": 0.10835084,
            "value": 21919.48,
            "offers": 1
        }
    ];

    return (
      <div className="orderbook">
          <Header/>
          <Table bidList={bidList} askList={askList}/>
      </div>
    );
}

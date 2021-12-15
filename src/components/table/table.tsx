import React from "react";
import './table.scss';
import { Order } from "../../models/order.model";
import { OrderList } from "../order-list/order-list";

interface TableProps {
    bidList: Order[];
    askList: Order[];
}

export const Table: React.FC<TableProps> = ({ bidList, askList }) => (
    <div className="table">
        <div className="table__bid">
            <OrderList title={'Bid'} list={bidList}/>
        </div>
        <div className="table__ask">
            <OrderList title={'Ask'} list={askList}/>
        </div>
    </div>
);

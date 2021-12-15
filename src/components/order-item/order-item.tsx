import React from "react";
import './order-item.scss';
import { Order } from "../../models/order.model";

interface OrderProps {
    order: Order;
}

export const OrderItem: React.FC<OrderProps> = ({ order }) => (
    <li className="order-item">
        <div className="order-item__rate">{order.rate}</div>
        <div className="order-item__amount">{order.amount}</div>
        <div className="order-item__value">{order.value}</div>
        <div className="order-item__offers">{order.offers}</div>
    </li>
);

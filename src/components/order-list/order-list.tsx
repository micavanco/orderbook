import React from 'react';
import './order-list.scss';
import { Order } from "../../models/order.model";
import { OrderItem } from "../order-item/order-item";

interface OrderListProps {
    title: string;
    list: Order[];
    currency: string;
}

export const OrderList: React.FC<OrderListProps> = ({ title, list, currency }) => (
    <div className="order-list">
        <h3 className="order-list__title">{title}</h3>
        { list.length > 0 ? (
            <ul>
                <li className="order-list__header">
                  <div>Rate</div>
                  <div>{currency.split('-')[0]}</div>
                  <div>{currency.split('-')[1]}</div>
                  <div>Offers</div>
                </li>
                {
                  list.map((order, index) =>
                    <OrderItem key={`order${index}`} order={order}/>
                  )
                }
            </ul>
          ) : (
            <div className="order-list__spinner">
              <div className="order-list__spinner-dot">
              </div>
            </div>
          )
        }
    </div>
);

import React from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import './order-list.scss';
import { Order } from "../../models/order.model";
import { OrderItem } from "../order-item/order-item";

interface OrderListProps {
    title: string;
    list: Order[];
}

export const OrderList: React.FC<OrderListProps> = ({ title, list}) => (
    <div className="order-list">
        <h3 className="order-list__title">{title}</h3>
        { list.length > 0 ? (
            <ul>
              <ReactCSSTransitionGroup
                transitionName="appear"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={300}
              >
                {
                  list.map((order, index) =>

                    <OrderItem key={`order${index}`} order={order}/>
                  )
                }
              </ReactCSSTransitionGroup>
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

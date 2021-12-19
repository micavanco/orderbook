import { Order } from '../../models/order.model';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { OrderList } from './order-list';

describe('OrderList', () => {
  it('should render properly order list items', () => {
    const order: Order = {
      rate: '0',
      amount: '0',
      value: '0',
      offers: '2'
    }
    const title: string = 'BID MOCK';
    const list: Order[] = [order];
    const currency: string = 'BTC-MOCK';
    const { container } = render(<OrderList title={title} list={list} currency={currency}/>);

    screen.debug();
    expect(container.firstElementChild?.firstElementChild).toHaveTextContent(title);
    expect(container.firstElementChild?.children[1].children[0]).toHaveTextContent(currency.split('-')[0]);
    expect(container.firstElementChild?.children[1]).toHaveTextContent(order.rate);
    expect(container.firstElementChild?.children[1]).toHaveTextContent(order.amount);
    expect(container.firstElementChild?.children[1]).toHaveTextContent(order.value);
    expect(container.firstElementChild?.children[1]).toHaveTextContent(order.offers);
  });
});

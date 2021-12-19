import React from 'react';
import { render, screen } from '@testing-library/react';
import { Order } from '../../models/order.model';
import { OrderItem } from './order-item';

describe('OrderItem', () => {
  it('should render properly', () => {
    const order: Order = {
      rate: '0',
      amount: '0',
      value: '0',
      offers: '2'
    }
    const { container } = render(<OrderItem order={order}/>);

    screen.debug();
    expect(container.firstElementChild).toHaveTextContent(order.rate);
  });
});

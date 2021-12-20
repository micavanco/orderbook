import { render, screen } from '@testing-library/react';
import React, { useContext } from 'react';
import { StoreContext, StoreProvider } from './store.context';
import { Store } from '../types/store.type';

describe('StoreProvider', () => {
  it('should render and return default values', () => {

    const OrderbookMock = () => {
      const { currency } = useContext(StoreContext) as unknown as Store;

      return <div>{currency}</div>
    };

    const { container }: any = render(
      <StoreProvider>
        <OrderbookMock/>
      </StoreProvider>
    );

    screen.debug();
    expect(container?.firstElementChild).toHaveTextContent('BTC-PLN');
  });
});

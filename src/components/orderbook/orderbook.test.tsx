import React from 'react';
import { render, screen } from '@testing-library/react';
import Orderbook from './orderbook';
import * as ReactAll from 'react';

describe('Orderbook', () => {
  it('should render properly Header and Table', () => {
    const useContextMock: any = jest.fn(() => (
      { currencies: [], currency: '', spread: '', setOrderCurrency: () => {}, currencyList: [], bidList: [], askList: [] }
    ));
    jest.spyOn(ReactAll, 'useContext').mockImplementation(useContextMock);

    const { container } = render(<Orderbook/>);

    screen.debug();
    expect(useContextMock).toHaveBeenCalled();
    expect(container.firstElementChild).toHaveClass('orderbook');
  });
});

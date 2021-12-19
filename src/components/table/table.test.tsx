import React from 'react';
import { render, screen } from '@testing-library/react';
import * as ReactAll from 'react';
import { Table } from './table';

describe('Table', () => {
  it('should render properly and works properly', () => {
    const useContextMock: any = jest.fn(() => (
      { currencies: [], currency: '', spread: '', setOrderCurrency: () => {}, currencyList: [], bidList: [], askList: [] }
    ));
    jest.spyOn(ReactAll, 'useContext').mockImplementation(useContextMock);

    const { container }: any = render(<Table/>);

    screen.debug();
    expect(container?.firstElementChild).toHaveClass('table');
    expect(container?.firstElementChild?.firstElementChild?.firstElementChild).toHaveClass('order-list');
    expect(useContextMock).toHaveBeenCalled();
  });
});

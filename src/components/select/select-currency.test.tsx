import React from 'react';
import { render, screen } from '@testing-library/react';
import { SelectCurrency } from './select-currency';

describe('SelectCurrency', () => {
  it('should render properly and works properly', () => {
    const setOrderCurrency = jest.fn((value: string) => {});
    const list: string[] = ['Mock'];
    const currency: string = 'BTC-MOCK';

    const { container }: any = render(<SelectCurrency list={list} currency={currency} setOrderCurrency={setOrderCurrency}/>);

    screen.debug();
    expect(container?.firstElementChild).toHaveClass('select');
    expect(container?.firstElementChild?.children[1]).toHaveTextContent(list[0]);
  });
});

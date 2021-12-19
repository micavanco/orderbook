import React from 'react';
import { render, screen } from '@testing-library/react';
import { Select } from './select';
import { Currency } from '../../models/currency.model';

describe('Select', () => {
  it('should render properly and works properly', () => {
    const setOrderCurrency = jest.fn((value: string) => {});
    const list: Currency[] = [{ name: 'Mock', img: '', displayName: '', fullName: '' }];
    const currency: string = 'BTC-MOCK';

    const { container }: any = render(<Select list={list} currency={currency} setOrderCurrency={setOrderCurrency}/>);

    screen.debug();
    expect(container?.firstElementChild).toHaveClass('select');
    expect(container?.firstElementChild?.children[1]).toHaveTextContent(list[0].name);
  });
});

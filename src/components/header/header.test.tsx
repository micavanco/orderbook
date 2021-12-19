import { render, screen } from '@testing-library/react';
import * as ReactAll from 'react';
import React from 'react';
import { Header } from './header';

describe('Header', () => {
  it('should render components properly', () => {
    const useContextMock: any = () => (
      { currencies: [], currency: '', spread: '', setOrderCurrency: () => {}, currencyList: [] }
    );
    jest.spyOn(ReactAll, 'useContext').mockImplementation(useContextMock);
    const { container } = render(<Header/>);

    screen.debug();
    expect(container.firstElementChild?.firstElementChild).toHaveClass('header__select-box');
  });
});

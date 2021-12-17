import React, { useState } from 'react';
import './header.scss';
import { Currency } from '../../models/currency.model';
import { Select } from '../select/select';
import { SelectCurrency } from '../select/select-currency';

interface HeaderProps {
  currencies: Currency[];
  onCurrencyChange: (value: string) => void;
  spread: number;
}

export const Header: React.FC<HeaderProps> = ({ currencies, onCurrencyChange, spread }) => {
    const defaultValue = 'BTC-PLN';
    const defaultRealCurrency = 'PLN';
    const currencyList = ['EUR', 'GBP', 'USDT', 'PLN'];
    const [exchange, setExchange] = useState(defaultValue)
    const [realCurrency, setRealCurrency] = useState(defaultRealCurrency)

    const onExchangeChange = (value: string) => {
      setExchange(value);
      onCurrencyChange(value);
    };

    const onRealCurrencyChange = (value: string) => {
      const cryptoValue = exchange.split('-')[0];

      onCurrencyChange(`${cryptoValue}-${value}`);
      setExchange(`${cryptoValue}-${value}`);
      setRealCurrency(value);
    };

    return (
        <header className="header">
            <div className="header__select-box">
              <Select list={currencies} realCurrency={realCurrency} onExchangeChange={onExchangeChange} exchange={exchange}/>
              <SelectCurrency list={currencyList} realCurrency={realCurrency} onRealCurrencyChange={onRealCurrencyChange}/>
            </div>
            <div className="header__spread">Spread: {spread}</div>
            <div className="header__range">Range</div>
        </header>
    );
}

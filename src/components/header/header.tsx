import React, { useState } from 'react';
import './header.scss';
import { Currency } from '../../models/currency.model';
import { Select } from '../select/select';

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

    const onRealCurrencyChange = (event: React.ChangeEvent<any>) => {
      const value = event.target.value;
      const cryptoValue = exchange.split('-')[0];

      onCurrencyChange(`${cryptoValue}-${value}`);
      setExchange(`${cryptoValue}-${value}`);
      setRealCurrency(event.target.value);
    };

    return (
        <header className="header">
            <div className="header__select-box">
              <Select list={currencies} realCurrency={realCurrency} onExchangeChange={onExchangeChange} exchange={exchange}/>
              <select name="currency" className="header__currency" defaultValue={defaultRealCurrency} onChange={onRealCurrencyChange}>
                {
                  currencyList.map(currency => (<option key={currency} value={currency}>{currency}</option>))
                }
              </select>
            </div>
            <div className="header__spread">Spread: {spread}</div>
            <div className="header__range">Range</div>
        </header>
    );
}

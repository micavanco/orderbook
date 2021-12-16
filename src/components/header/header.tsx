import React, { useState } from 'react';
import './header.scss';
import { Currency } from '../../models/currency.model';

interface HeaderProps {
  currencies: Currency[];
  onCurrencyChange: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currencies, onCurrencyChange }) => {
    const defaultValue = 'BTC-PLN';
    const defaultRealCurrency = 'PLN';
    const currencyList = ['EUR', 'GBP', 'USDT', 'PLN'];
    const [cryptoCurrencyExchange, setCryptoCurrencyExchange] = useState(defaultValue)
    const [realCurrency, setRealCurrency] = useState(defaultRealCurrency)

    const onExchangeChange = (event: React.ChangeEvent<any>) => {
      const value = event.target.value;

      setCryptoCurrencyExchange(value);
      onCurrencyChange(value);
    }

    const onRealCurrencyChange = (event: React.ChangeEvent<any>) => {
      const value = event.target.value;
      const cryptoValue = cryptoCurrencyExchange.split('-')[0];

      setRealCurrency(event.target.value);
      onCurrencyChange(`${cryptoValue}-${value}`);
      setCryptoCurrencyExchange(`${cryptoValue}-${value}`);
    };

    return (
        <header className="header">
            <div className="header__select-box">
              <select name="currency" className="header__currency" value={cryptoCurrencyExchange} onChange={onExchangeChange}>
                {
                  currencies.map(currency => (<option key={currency.name} value={`${currency.name}-${realCurrency}`}>{`${currency.name}-${realCurrency}`}</option>))
                }
              </select>
              <select name="currency" className="header__currency" defaultValue={defaultRealCurrency} onChange={onRealCurrencyChange}>
                {
                  currencyList.map(currency => (<option key={currency} value={currency}>{currency}</option>))
                }
              </select>
            </div>
            <div className="header__spread">Spread:</div>
            <div className="header__range">Range</div>
        </header>
    );
}

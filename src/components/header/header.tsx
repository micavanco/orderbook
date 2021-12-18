import React, { useContext } from 'react';
import './header.scss';
import { Select } from '../select/select';
import { SelectCurrency } from '../select/select-currency';
import { Store } from '../../types/store.type';
import { StoreContext } from '../../context/store.context';

export const Header: React.FC = () => {
    const { currencies, currency, spread, setOrderCurrency, currencyList } = useContext(StoreContext) as unknown as Store;

    return (
        <header className="header">
            <div className="header__select-box">
              <Select list={currencies} currency={currency} setOrderCurrency={setOrderCurrency}/>
              <SelectCurrency list={currencyList} currency={currency} setOrderCurrency={setOrderCurrency}/>
            </div>
            <div className="header__spread">Spread: <span>{spread}</span></div>
            <div className="header__range"><span>24h max</span><span>24h min</span></div>
        </header>
    );
}

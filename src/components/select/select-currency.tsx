import React, { useState } from 'react';
import './select.scss';

interface SelectCurrencyProps {
  list: string[];
  currency: string;
  setOrderCurrency: (value: string) => void;
}

export const SelectCurrency: React.FC<SelectCurrencyProps> = ({ list, currency, setOrderCurrency }) => {
  const [close, setClose] = useState(true);

  const click = (value: string) => {
    setClose(true);
    setOrderCurrency(`${currency.split('-')[0]}-${value}`);
  };

  return (
    <div className="select">
      <button className="select__button" onClick={() => setClose(!close)} onBlur={() => setClose(true)}>
        {currency.split('-')[1]}
        <div className={`select__button-arrow${ close ? '' : ' select__button-arrow--flip' }`}>
        </div>
      </button>
      <div className={`select__dropdown select__dropdown-currency${ close ? ' select__dropdown--close' : '' }`}>
        {
          list.map(currency => (
            <div className="select__dropdown-item" key={currency} onMouseDown={() => click(currency)}>
              {currency}
            </div>
          ))
        }
      </div>
    </div>
  )
}

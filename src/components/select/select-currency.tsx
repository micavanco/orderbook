import React, { useState } from 'react';
import './select.scss';

interface SelectCurrencyProps {
  list: string[];
  realCurrency: string;
  onRealCurrencyChange: (value: string) => void;
}

export const SelectCurrency: React.FC<SelectCurrencyProps> = ({ list, onRealCurrencyChange, realCurrency }) => {
  const [selected, setSelected] = useState(realCurrency);
  const [close, setClose] = useState(true);

  const click = (value: string) => {
    setSelected(value);
    onRealCurrencyChange(value);
    setClose(true);
  };

  return (
    <div className="select">
      <button className="select__button" onClick={() => setClose(!close)} onBlur={() => setClose(true)}>{selected}</button>
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

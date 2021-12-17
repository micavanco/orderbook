import React, { useEffect, useState } from 'react';
import './select.scss';
import { Currency } from '../../models/currency.model';

interface SelectProps {
  list: Currency[];
  realCurrency: string;
  onExchangeChange: (value: string) => void;
  exchange: string;
}

export const Select: React.FC<SelectProps> = ({ list, realCurrency, exchange, onExchangeChange }) => {
  const [selected, setSelected] = useState(exchange);
  const [close, setClose] = useState(true);

  useEffect(() => {
    setSelected(exchange);
  }, [realCurrency]);

  const click = (value: string) => {
    setSelected(value);
    onExchangeChange(value);
    setClose(true);
  };

  return (
    <div className="select">
      <button className="select__button" onClick={() => setClose(!close)} onBlur={() => setClose(true)}>
        {selected}
        <div className={`select__button-arrow${ close ? '' : ' select__button-arrow--flip' }`}>
        </div>
      </button>
      <div className={`select__dropdown${ close ? ' select__dropdown--close' : '' }`}>
        {
          list.map(currency => (
            <div className="select__dropdown-item" key={currency.name} onMouseDown={() => click(`${currency.name}-${realCurrency}`)}>
              <img src={currency.img} alt={currency.name} width={14} height={14}/>
              {`${currency.name}-${realCurrency}`}
            </div>
          ))
        }
      </div>
    </div>
  )
}

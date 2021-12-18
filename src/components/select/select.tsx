import React, { useState } from 'react';
import './select.scss';
import { Currency } from '../../models/currency.model';

interface SelectProps {
  list: Currency[];
  currency: string;
  setOrderCurrency: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ list, currency, setOrderCurrency }) => {
  const [close, setClose] = useState(true);

  const click = (value: string) => {
    setClose(true);
    setOrderCurrency(value);
  };

  return (
    <div className="select">
      <button className="select__button" onClick={() => setClose(!close)} onBlur={() => setClose(true)}>
        {currency}
        <div className={`select__button-arrow${ close ? '' : ' select__button-arrow--flip' }`}>
        </div>
      </button>
      <div className={`select__dropdown${ close ? ' select__dropdown--close' : '' }`}>
        {
          list.map(item => (
            <div className="select__dropdown-item" key={item.name} onMouseDown={() => click(`${item.name}-${currency.split('-')[1]}`)}>
              <img src={item.img} alt={item.name} width={14} height={14}/>
              {`${item.name}-${currency.split('-')[1]}`}
            </div>
          ))
        }
      </div>
    </div>
  )
}

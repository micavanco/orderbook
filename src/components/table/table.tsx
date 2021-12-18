import React, { useContext, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './table.scss';
import { OrderList } from "../order-list/order-list";
import { StoreContext } from '../../context/store.context';
import { Store } from '../../types/store.type';

export const Table: React.FC = () => {
  const { bidList, askList, currency } = useContext(StoreContext) as unknown as Store;
  const config = {
    from: { opacity: 0, transform: "scale(0)" },
    to: { opacity: 1, transform: "scale(1)" },
    duration: 800
  };
  const [styles, api] = useSpring(() => config);


  useEffect(() => {
    api.start({ opacity: 0, transform: "scale(0)" });
    setTimeout(() => {
      api.start({ opacity: 1, transform: "scale(1)" });
    }, 800);
  }, [currency]);


  return (
    <div className="table">
      <animated.div className="table__bid" style={styles}>
        <OrderList title={'Bid'} list={bidList} currency={currency}/>
      </animated.div>
      <div className="table__separator">
      </div>
      <animated.div className="table__ask" style={styles}>
        <OrderList title={'Ask'} list={askList} currency={currency}/>
      </animated.div>
    </div>
  );
}


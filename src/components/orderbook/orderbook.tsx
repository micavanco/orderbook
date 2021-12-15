import React from "react";
import './orderbook.scss';
import { Header } from "../header/header";
import { Table } from "../table/table";

export const Orderbook: React.FC = () => {

    return (
      <div className="orderbook">
          <Header/>
          <Table bidList={[]} askList={[]}/>
      </div>
    );
}

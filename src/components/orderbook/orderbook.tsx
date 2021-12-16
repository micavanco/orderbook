import React, {useEffect, useState} from "react";
import './orderbook.scss';
import { Header } from "../header/header";
import { Table } from "../table/table";
import { Order } from "../../models/order.model";
import WebsocketService from "../../services/websocket.service";

const websocketService = new WebsocketService();

export const Orderbook: React.FC = () => {
    const [list, setList] = useState([]);


    useEffect(() => {
        websocketService.connect('btc-pln', setList);
    });


    return (
      <div className="orderbook">
          <Header/>
          <Table bidList={list} askList={list}/>
      </div>
    );
}

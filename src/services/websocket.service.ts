import { Order } from "../models/order.model";

export default class WebsocketService {

    private BASE_URL = 'wss://api.zonda.exchange/websocket/';

    private socket: WebSocket = new WebSocket(this.BASE_URL);

    private orders: Order[] = [];

    public connect(currency: string, handler: (orders: any) => void) {
        this.socket.onopen = () => {
            this.socket.send(JSON.stringify({
                action: 'subscribe-public',
                module: 'trading',
                path: `orderbook-limited/${currency}/10`
            }));
        }
        this.socket.onmessage = message => {
            const data = JSON.parse(message.data)

            if (data.action === 'push') {
                const rawOrders = data.message.changes;
                let orders: Order[] = rawOrders.map((item: any) => item.action === 'update' && {
                    rate: parseFloat(item.state.ra).toFixed(2),
                    amount: parseFloat(item.state.ca).toFixed(2),
                    value: (parseFloat(item.state.ra) * parseFloat(item.state.ca)).toFixed(2),
                    offers: parseFloat(item.state.co).toFixed(2)
                }).filter((item: Order) => item);
                orders.slice(0, 10);

                if (orders.length < 10) {
                    orders.push(...this.orders.slice(0, 10 - orders.length));
                }

                this.orders = [ ...orders ];

                handler(orders);
            }
        }
    }

}

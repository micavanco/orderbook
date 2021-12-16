import { Order } from "../models/order.model";

export default class WebsocketService {

    private BASE_URL = 'wss://api.zonda.exchange/websocket/';

    private socket: WebSocket = new WebSocket(this.BASE_URL);

    private bidOrders: Order[] = [];

    private askOrders: Order[] = [];

    private currency = '';

    public connect(currency: string, handler: (bidListData: Order[], askListData: Order[]) => void) {
        if (!this.socket.onopen) {
            this.socket.onopen = () => {
                this.socket.send(JSON.stringify({
                    action: 'subscribe-public',
                    module: 'trading',
                    path: `orderbook-limited/${currency}/10`
                }));
            }
        } else {
            this.socket.send(JSON.stringify({
                action: 'subscribe-public',
                module: 'trading',
                path: `orderbook-limited/${currency}/10`
            }));
        }

        this.currency = currency;
        this.socket.onmessage = message => {
            const data = JSON.parse(message.data)

            if (data.action === 'push') {
                const rawOrders = data.message.changes;
                const bidOrders: Order[] = [];
                const askOrders: Order[] = [];

                rawOrders.forEach((item: any) => {
                    if (item.action === 'update') {
                        const value = {
                            rate: parseFloat(item.state.ra).toFixed(2),
                            amount: parseFloat(item.state.ca).toFixed(2),
                            value: (parseFloat(item.state.ra) * parseFloat(item.state.ca)).toFixed(2),
                            offers: parseFloat(item.state.co).toFixed(2)
                        };

                        item.entryType === 'Buy' ?  bidOrders.push(value) : askOrders.push(value);
                    }
                });

                bidOrders.slice(0, 10);
                askOrders.slice(0, 10);

                if (bidOrders.length < 10) {
                    bidOrders.push(...this.bidOrders.slice(0, 10 - bidOrders.length));
                }

                if (askOrders.length < 10) {
                    askOrders.push(...this.askOrders.slice(0, 10 - askOrders.length));
                }

                this.bidOrders = [ ...bidOrders ];
                this.askOrders = [ ...askOrders ];

                handler(this.bidOrders, this.askOrders);
            }
        }
    }

    public disconnect(): void {
        if (this.currency) {
            this.socket.send(JSON.stringify({
                action: 'unsubscribe',
                module: 'trading',
                path: `orderbook-limited/${this.currency}/10`
            }));
            this.bidOrders = [];
            this.askOrders = [];
        }
    }

}

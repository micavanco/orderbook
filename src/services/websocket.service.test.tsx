import React from 'react';
import { screen } from '@testing-library/react';
import WebsocketService from './websocket.service';

describe('WebsocketService', () => {
  const data = '{"action":"push","topic":"trading/orderbook-limited/btc-pln/10","message":' +
    '{"changes":[{"marketCode":"BTC-PLN","entryType":"Buy","rate":"191090.01","action":"update","state":{"ra":"191090.01","ca' +
    '":"0.05405015","sa":"0.05405015","pa":"0.05405015","co":1}},{"marketCode":"BTC-PLN","entryType":"Sell","rate":"193354.03","action":"update","s' +
    'tate":{"ra":"193354.03","ca":"0.00311699","sa":"0.00311699","pa":"0.00311699","co":1}},{"marketCode":"BTC-PLN","entry' +
    'Type":"Sell","rate":"191997.01","action":"remove"}],"timestamp":"1640023138936"},"timestamp":"1640023138936","seqNo":87062116}';

  it('should connect to websocket properly', () => {
    const currency = 'BTC-PLN';
    const askExpected = {"amount": "0.0031", "offers": "1.00", "rate": "193354.03", "value": "602.68"};
    const bidExpected = {"amount": "0.0541", "offers": "1.00", "rate": "191090.01", "value": "10328.44"};
    let bid: any = [];
    let ask: any = [];
    const handler = jest.fn((bidList, askList) => {
      bid = bidList;
      ask = askList;
    });
    const websocketService = new WebsocketService();

    websocketService.connect(currency, handler);
    // @ts-ignore
    websocketService.socket.onmessage({ data });


    screen.debug();
    expect(handler).toHaveBeenCalled();
    ask.map((data: any) => expect(data).toEqual(askExpected))
    bid.map((data: any) => expect(data).toEqual(bidExpected))
  });
});

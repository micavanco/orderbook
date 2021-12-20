import React from 'react';
import { screen } from '@testing-library/react';
import RestApiService from './rest-api.service';

describe('RestApiService',  () => {
  it('should return correct values', async () => {
    const data = [{
      displayName: 'MOCK',
      fullName: '',
      img: 'img',
      name: "0"
    }];
    const restApiService = new RestApiService();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ currencies: data }),
      })
    ) as any;

    const receivedData = await restApiService.getCurrencies();

    expect(fetch).toHaveBeenCalled();
    expect(receivedData).toEqual(data);
    screen.debug();
  });
});

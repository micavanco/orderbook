import React, { createContext } from 'react';
import { Currency } from '../models/currency.model';

export interface IRestApiService {
    getCurrencies(): Promise<Currency[]>
}

export const RestApiServiceContext = createContext<IRestApiService | undefined>(undefined);

export const RestApiService: React.FC = ({ children }: any) => {

    const CURRENCIES_URL = 'https://zondaglobal.com/o/configuration/currencies';

    const fetchOptions = { method: 'GET', headers: { Accept: 'application/json' } };

    const restApiService = {
        async getCurrencies(): Promise<Currency[]> {
            const data: any = await fetch(CURRENCIES_URL, fetchOptions);
            const currencies = [];

            for (const [key, value] of Object.entries(data.currencies) as [key: string, value: Currency][]) {
                currencies.push({ name: key, fullName: value.fullName, displayName: value.displayName, img: value.img })
            }

            return currencies;
        }
    }

    return (
        <>
            <RestApiServiceContext.Provider value={restApiService}>
                { children }
            </RestApiServiceContext.Provider>
        </>
    )
}

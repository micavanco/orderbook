import { Currency } from '../models/currency.model';

export class RestApiService {

    public CURRENCIES_URL = 'https://zondaglobal.com/o/configuration/currencies';

    public fetchOptions = { method: 'GET', headers: { Accept: 'application/json' } };

    public async getCurrencies(): Promise<Currency[]> {
        const data: any = await fetch(this.CURRENCIES_URL, this.fetchOptions);
        const currencies = [];

        for (const [key, value] of Object.entries(data.currencies) as [key: string, value: Currency][]) {
            currencies.push({ name: key, fullName: value.fullName, displayName: value.displayName, img: value.img });
        }

        return currencies;
    }
}

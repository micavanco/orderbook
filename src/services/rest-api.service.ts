import { Currency } from '../models/currency.model';

export default class RestApiService {

    public CURRENCIES_URL = 'currencies.json';

    public fetchOptions: RequestInit = { method: 'GET', mode: 'no-cors', headers: { Accept: 'application/json', 'Content-Type': 'application/json' } };

    public getCurrencies(): Promise<Currency[]> {
        return fetch(this.CURRENCIES_URL, this.fetchOptions)
          .then(data => data.json())
          .then(data => {
              const currencies = [];

              for (const [key, value] of Object.entries(data.currencies) as [key: string, value: Currency][]) {
                  currencies.push({ name: key, fullName: value.fullName, displayName: value.displayName, img: value.img });
              }

              return currencies;
          });
    }
}

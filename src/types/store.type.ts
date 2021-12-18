import { Order } from '../models/order.model';
import { Currency } from '../models/currency.model';

export type Store = {
  bidList: Order[];
  askList: Order[];
  spread: number;
  currencies: Currency[];
  currency: string;
  currencyList: string[];
  setOrderCurrency: (currency: string) => void;
}

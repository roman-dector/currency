import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export type Currency = {
  name: string;
  value: number;
  gap: number;
  visible: boolean;
};

export type Quotes = {
  RUBUSD: number;
  RUBEUR: number;
  RUBGBP: number;
  RUBCNY: number;
  RUBJPY: number;
  RUBTRY: number;
};

type RatesResponse = {
  quotes: Quotes;
};

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getCurrencyRates() {
    return this.http.get<RatesResponse>(
      'https://api.apilayer.com/currency_data/live',
      {
        headers: new HttpHeaders({
          apikey: 'N87DCQgNjOq1cCAy2thJvhYXSqgL48DT',
        }),
        params: new HttpParams({
          fromObject: {
            source: 'RUB',
            currencies: 'USD,EUR,GBP,CNY,JPY,TRY',
          },
        }),
      }
    );
  }
}

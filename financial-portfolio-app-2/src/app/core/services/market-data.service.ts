import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {
  constructor(private http: HttpClient) {}

  getMarketTrends(): Observable<any> {
    return this.http.get('/assets/data/mock-market-data.json').pipe(delay(500));
  }
}
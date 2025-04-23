import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Investment } from '../../models/investment.model';
import { environment } from '../../../environments/environment';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = `${environment.apiUrl}/investments`;

  constructor(private http: HttpClient) {}

  getInvestments(): Observable<Investment[]> {
    // Mock implementation
    return this.http.get<Investment[]>('/assets/data/mock-investments.json').pipe(delay(500));
  }

  addInvestment(investment: Investment): Observable<Investment> {
    // Mock implementation
    return of(investment).pipe(delay(500));
  }

  updateInvestment(investment: Investment): Observable<Investment> {
    // Mock implementation
    return of(investment).pipe(delay(500));
  }

  deleteInvestment(id: string): Observable<void> {
    // Mock implementation
    return of(null).pipe(delay(500));
  }
}
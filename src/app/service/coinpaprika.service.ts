import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinpaprikaService {

  private apiUrl = 'https://api.coinpaprika.com/v1';

  constructor(private http: HttpClient) { }

  // Lấy danh sách các đồng tiền điện tử
  getAllCoins(): Observable<any> {
    return this.http.get(`${this.apiUrl}/coins`);
  }

  // Lấy thông tin chi tiết của một đồng tiền điện tử
  getCoinDetails(coinId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/coins/${coinId}`);
  }

  // Lấy giá thị trường của một đồng tiền điện tử
  getCoinMarketData(coinId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/tickers/${coinId}`);
  }

  // Lấy coin highlight
  getHighlightCoins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/coins/`);
  }

  // Lấy danh sách coin mới
  getNewListings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/coins/new`);
  }

  // Lấy top gainer
  getTopGainers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/coins/top-gainers`);
  }

  // Lấy top volume
  getTopVolume(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/coins/top-volume`);
  }
}
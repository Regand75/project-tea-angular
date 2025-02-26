import { Injectable } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ProductCardType} from "../../../types/product-card.type";
import {OrderType} from "../../../types/order.type";

@Injectable({providedIn: 'root'})
export class ProductService {

  private apiUrl = 'https://testologia.ru/';
  private searchQuery$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getProducts(searchQuery: string = ''): Observable<ProductType[]> {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.set('search', searchQuery);
    }
    return this.http.get<ProductType[]>(`${this.apiUrl}tea`, {params});
  }

  setSearchQuery(query: string): void {
    this.searchQuery$.next(query);
  }

  getSearchQuery(): Observable<string> {
    return this.searchQuery$.asObservable();
  }

  getProduct(id: number): Observable<ProductCardType> {
    return this.http.get<ProductCardType>(`${this.apiUrl}tea?id=${id}`);
  }

  createOrder(data: OrderType): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}order-tea`, data);
  }

}

import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductCardType} from "../types/product-card.type";
import {OrderType} from "../types/order.type";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea');
  };

  getProduct(id: number): Observable<ProductCardType> {
    return this.http.get<ProductCardType>(`https://testologia.ru/tea?id=${id}`);
  }

  createOrder(data: OrderType): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>('https://testologia.ru/order-tea', data);
  }
}

// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';
  private cart: Product[] = [];

  constructor(private http: HttpClient) { }

  submitCart(cart: Product[]): Observable<any> {
    this.cart = cart;
    return this.http.post<any>(`${this.baseUrl}/cart`, cart);
  }

  getCart(): Product[] {
    return this.cart;
  }
}

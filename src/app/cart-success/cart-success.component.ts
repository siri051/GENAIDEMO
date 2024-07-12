// cart-success.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/ProductService';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-success',
  templateUrl: './cart-success.component.html',
  styleUrls: ['./cart-success.component.css']
})

export class CartSuccessComponent implements OnInit {
  cart: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.productService.getCart();
  }
  signOut(): void {


    // Navigate to the home page after signing out
    this.router.navigate(['/']); // Replace '/' with your home page route
  }
}

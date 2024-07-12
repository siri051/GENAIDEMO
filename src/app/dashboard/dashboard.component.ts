// dashboard.component.ts
import { Component } from '@angular/core';
import { ProductService } from '../service/ProductService';
import { Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products: Product[] = [
    { name: 'Java' },
    { name: 'Python' },
    { name: 'Spring Boot' },
    { name: 'Angular' },
    { name: 'React' },
    { name: 'JavaScript' },
    { name: 'Maven' },
    { name: 'Gradle' },
    { name: 'Microservices' },
    { name: 'MongoDB' },
    { name: 'MySQL' },
    { name: 'Hibernate' }
  ];
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  addProduct(product: Product) {
    this.selectedProducts.push(product);
  }

  removeProduct(product: Product) {
    this.selectedProducts = this.selectedProducts.filter(p => p !== product);
  }

  submitCart() {
    this.productService.submitCart(this.selectedProducts).subscribe(
      response => {
        console.log('Cart submitted successfully', response);
        this.router.navigate(['/cart-success']);
      },
      error => {
        console.error('Error submitting cart', error);
      }
    );
  }
}

import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductType[] = [];
  searchQuery: string = '';
  private subscription: Subscription = new Subscription();

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.productService.getSearchQuery().subscribe(query => {
        this.searchQuery = query;
        this.loadProducts(query);
      })
    );
  }

  loadProducts(query: string = ''): void {
    this.productService.getProducts(query).subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

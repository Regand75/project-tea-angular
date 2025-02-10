import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {DataProductService} from "../../../services/data-product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductType[] = [];

  constructor(private productService: ProductService, private dataProductService: DataProductService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: ProductType): void {
    this.dataProductService.product = product.title;
    this.router.navigate(['/order']);
  }

}

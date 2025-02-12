import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {ProductCardType} from "../../../types/product-card.type";
import {ProductType} from "../../../types/product.type";
import {DataProductService} from "../../../services/data-product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductCardType;

  constructor(private activatedRoute: ActivatedRoute, private dataProductService: DataProductService, private productService: ProductService, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: '',
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (error) => {
              console.log(error);
              this.router.navigate(['/']);
            }
        });
      }
    })
  }

  addToCart(product: ProductType): void {
    this.dataProductService.product = product.title;
    this.router.navigate(['/order']);
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
    }
  }

  ngOnInit(): void {
  }

}

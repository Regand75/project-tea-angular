import { Component, OnInit } from '@angular/core';
import {DataProductService} from "../../../services/data-product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private dataProductService: DataProductService) { }

  formValues = {
    name: '',
    last_name: '',
    phone: '',
    country: '',
    zip: '',
    product: '',
    address: '',
    comment: '',
  }

  ngOnInit(): void {
    if (this.dataProductService.product) {
      this.formValues.product = this.dataProductService.product;
    }
  }

}

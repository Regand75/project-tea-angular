import { Component, OnInit } from '@angular/core';
import {DataProductService} from "../../../services/data-product.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

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

  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe(params => {
      if (params['product']) {
        this.formValues.product = params['product'];
      }
    });
  }

}

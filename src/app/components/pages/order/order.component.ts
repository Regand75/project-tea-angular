import { Component, OnInit } from '@angular/core';
import {DataProductService} from "../../../services/data-product.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  dataForm = new FormGroup({
    name: new FormControl(''),
    last_name: new FormControl(''),
    phone: new FormControl(''),
    country: new FormControl(''),
    zip: new FormControl(''),
    product: new FormControl(''),
    address: new FormControl(''),
    comment: new FormControl(''),
  })

  constructor(private activatedRoute: ActivatedRoute) { }

  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe(params => {
      if (params['product']) {
        this.dataForm.patchValue({
          product: params['product'],
        });
      }
    });
  }

  sendingOrder() {
    console.log(this.dataForm.value);
  }

  get name() {return this.dataForm.get('name');}

}

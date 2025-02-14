import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  dataForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    product: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я0-9\\s\\-\\/]+$')]],
    comment: [''],
  });

  constructor(private fb:FormBuilder, private activatedRoute: ActivatedRoute) { }

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

  // get name() {return this.dataForm.get('name');}

}

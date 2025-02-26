import {Component, OnInit} from '@angular/core';
import {Subscription, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";
import {OrderType} from "../../../types/order.type";

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
    product: [{value: '', disabled: true}],
    address: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я0-9\\s\\-\\/]+$')]],
    comment: [''],
  });

  orderSuccess: boolean = false; // Флаг успешного заказа
  orderError: string | null = null; // Сообщение об ошибке
  loading: boolean = false;
  isLoading: boolean = false; // Флаг для блокировки кнопки
  private subscription: Subscription | null = null;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }


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
    if (this.dataForm.invalid) {
      return;
    }

    const formData: OrderType = this.dataForm.getRawValue() as OrderType;
    this.isLoading = true; // Блокируем кнопку
    this.orderError = null; // Сбрасываем сообщение об ошибке
    this.loading = true;
    this.productService.createOrder(formData)
      .pipe(
        tap(() => {
          this.loading = false;
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.orderSuccess = true; // Скрываем форму, показываем сообщение
          } else {
            this.showError('Произошла ошибка. Попробуйте еще раз.');
          }
        },
        error: (error) => {
          this.loading = false;
          console.log(error);
          this.showError('Произошла ошибка. Попробуйте еще раз.');
        }
      });
  }

  private showError(massage: string): void {
    this.orderError = massage;
    setTimeout(() => {
      this.orderError = null;
      this.isLoading = false;
    },3000)
  }

}

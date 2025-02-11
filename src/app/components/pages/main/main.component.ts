import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import * as $ from "jquery";
import {Modal} from "bootstrap";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  private observable: Observable<void>;
  private subscription: Subscription | null = null;
  private modal: Modal | null = null;

  @ViewChild('popup') popup!: ElementRef;

  constructor() {
    this.observable = new Observable(observer => {
      setTimeout(() => {
        observer.next();
        observer.complete();
      },10000);
    });
  }

  ngOnInit(): void {
    this.subscription = this.observable.subscribe(() => {
      this.showModal();
    })
  }

  ngAfterViewInit() {
    // Инициализация аккордеона
    $('#accordion').accordion();

    // Управление стрелками при работе аккордеона
    $('.questions h3').click(function () {
      $('.questions .arrow').removeClass('rotate').addClass('reset'); // Убираем класс rotate со всех стрелок и добавляем класс reset
      $(this).find('.arrow').toggleClass('rotate reset'); // Переключаем классы rotate и reset для текущей стрелки
    });
  }

  showModal(): void {
    if (this.popup) {
      this.modal = new Modal(this.popup.nativeElement);
      this.modal.show();
    }
  }

  closeModal(): void {
    if (this.modal) {
        this.modal.hide();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit, TemplateRef,
  ViewChild
} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import * as $ from "jquery";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  private observable: Observable<void>;
  private subscription: Subscription | null = null;
  private modalRef: any;

  @ViewChild('popup') popup!: TemplateRef<ElementRef>;

  constructor(private modalService: NgbModal) {
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
      this.modalRef = this.modalService.open(this.popup, {});
    }
  }

  closeModal(): void {
    if (this.modalRef) {
        this.modalRef.close();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

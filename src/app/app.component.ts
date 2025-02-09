import {AfterViewInit, Component} from '@angular/core';
import * as $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.min.js';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public products: ProductType[] = [
    {
      image: 'image1.png',
      imageBig: 'image_big1.png',
      title: 'Детокс чай лайм',
      description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления',
    },
    {
      image: 'image2.png',
      imageBig: 'image_big2.png',
      title: 'Ягодный чай',
      description: 'Нотки ягод позволят вам расслабиться и насладиться великолепием этого чая',
    },
    {
      image: 'image3.png',
      imageBig: 'image_big3.png',
      title: 'Цветочный чай',
      description: 'Душистые цветы создают невероятный аромат и наполняют вас энергией',
    },
    {
      image: 'image4.png',
      imageBig: 'image_big4.png',
      title: 'Очищающий чай',
      description: 'Бесподобный чай для получения утреннего заряда бодрости',
    },
    {
      image: 'image5.png',
      imageBig: 'image_big5.png',
      title: 'Кислый чай',
      description: 'Кислый чай для настоящих ценителей кислинки во время чаепития',
    },
    {
      image: 'image6.png',
      imageBig: 'image_big6.png',
      title: 'Лимонная мята',
      description: 'Смесь лимона с мятой сделает ваш день самым лучшим',
    },
  ];

  public formValues = {
    name: '',
    last_name: '',
    phone: '',
    country: '',
    zip: '',
    product: '',
    address: '',
    comment: '',
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

  public addToCart(product: ProductType): void {
    this.formValues.product = product.title;
  }
}

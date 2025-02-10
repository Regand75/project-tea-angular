import {AfterViewInit, Component} from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Инициализация аккордеона
    $('#accordion').accordion();

    // Управление стрелками при работе аккордеона
    $('.questions h3').click(function () {
      $('.questions .arrow').removeClass('rotate').addClass('reset'); // Убираем класс rotate со всех стрелок и добавляем класс reset
      $(this).find('.arrow').toggleClass('rotate reset'); // Переключаем классы rotate и reset для текущей стрелки
    });
  }

}

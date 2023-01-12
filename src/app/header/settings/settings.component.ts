import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ColorCountService } from 'src/app/services/color-count.service';
import { ThemeChangeServiceService } from 'src/app/services/theme-change-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  numberItems: number[] = [3, 4, 5, 6];
  languageItems: String[] = ['en-US', 'ru-RU'];
  theme: String = 'brightness_7';
  visibilityRgbCircle: boolean = false;
  visibilityIcon: String = 'visibility_off';
  numberOfColorsString: String;
  currentNumber: number = 0;

  constructor(
    private changeThemeS: ThemeChangeServiceService,
    private translate: TranslateService,
    private colorCountService: ColorCountService
  ) {
    colorCountService.currentNumberOfBlocks$.subscribe((count) => {
      this.currentNumber = count;
    });

    this.colorCountService.currentNumberOfBlocks$.next(
      Number(localStorage.getItem('currentNumber')) || 4
    );

    this.numberOfColorsString = 'filter_' + this.currentNumber;
  }

  ngOnInit(): void {
    this.translate.setDefaultLang(localStorage.getItem('lang') || 'en-US');
    this.translate.use(localStorage.getItem('lang') || 'en-US');
  }

  numberMenuClick(num: number): void {
    this.numberOfColorsString = 'filter_' + num;

    localStorage.setItem('currentNumber', String(num));

    this.colorCountService.currentNumberOfBlocks$.next(num);
  }

  languageMenuClick(language: String): void {
    if ((language = 'en-US')) {
      this.translate.use('en-US');
    } else {
      this.translate.use('ru-RU');
    }
  }

  changeTheme(): void {
    if (this.theme === 'brightness_7') {
      this.theme = 'brightness_3';
      this.changeThemeS.changeToDark();
    } else {
      this.theme = 'brightness_7';
      this.changeThemeS.changeToLight();
    }
  }

  changeRgbCircleVisibility(): void {
    if (this.visibilityRgbCircle === false) {
      this.visibilityRgbCircle = true;
      this.visibilityIcon = 'visibility';
    } else {
      this.visibilityRgbCircle = false;
      this.visibilityIcon = 'visibility_off';
    }
  }
}

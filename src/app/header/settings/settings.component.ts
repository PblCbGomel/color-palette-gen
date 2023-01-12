import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeChangeServiceService } from 'src/app/services/theme-change-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  numberOfColors: String = 'filter_3';
  numberItems: Number[] = [3, 4, 5, 6];
  languageItems: String[] = ['en-US', 'ru-RU'];
  theme: String = 'brightness_7';
  visibilityRgbCircle: boolean = false;
  visibilityIcon: String = 'visibility_off';

  constructor(
    private changeThemeS: ThemeChangeServiceService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang(localStorage.getItem('lang') || 'en-US');
    this.translate.use(localStorage.getItem('lang') || 'en-US');
  }

  numberMenuClick(num: Number): void {
    this.numberOfColors = 'filter_' + num;
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

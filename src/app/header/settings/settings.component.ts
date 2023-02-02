import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ColorCountService } from 'src/app/services/color-count.service';
import { ThemeChangeServiceService } from 'src/app/services/theme-change-service.service';
import { VisibilityRgbCircleService } from 'src/app/services/visibility-rgb-circle.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  numberItems: number[] = [3, 4, 5, 6];
  languageItems: string[] = ['en-US', 'ru-RU'];
  theme: string;
  visibilityIcon: string;
  numberOfColorsString: string;
  currentNumber: number = 0;

  constructor(
    private changeThemeS: ThemeChangeServiceService,
    private translate: TranslateService,
    private colorCountService: ColorCountService,
    private areCirclesVisibility: VisibilityRgbCircleService,
    public dialog: MatDialog
  ) {
    colorCountService.currentNumberOfBlocks$.subscribe((count) => {
      this.currentNumber = count;
    });

    this.colorCountService.currentNumberOfBlocks$.next(
      Number(localStorage.getItem('currentNumber')) || 4
    );

    this.numberOfColorsString = 'filter_' + this.currentNumber;

    this.visibilityIcon =
      localStorage.getItem('visibilityRgbCircle') === 'false'
        ? 'visibility_off'
        : 'visibility';

    this.theme = localStorage.getItem('currentTheme') || 'brightness_7';

    if (this.theme === 'brightness_7') {
      this.changeThemeS.changeToLight();
    } else {
      this.changeThemeS.changeToDark();
    }
  }

  ngOnInit(): void {
    this.translate.setDefaultLang(localStorage.getItem('lang') || 'en-US');
    this.translate.use(localStorage.getItem('lang') || 'en-US');
    this.areCirclesVisibility.visibilityRgbCircle =
      localStorage.getItem('visibilityRgbCircle') === 'true' || false;
  }

  numberMenuClick(num: number): void {
    this.numberOfColorsString = 'filter_' + num;

    localStorage.setItem('currentNumber', String(num));

    this.colorCountService.currentNumberOfBlocks$.next(num);
  }

  languageMenuClick(language: String): void {
    if (language === 'en-US') {
      this.translate.use('en-US');
      localStorage.setItem('lang', 'en-US');
    } else {
      this.translate.use('ru-RU');
      localStorage.setItem('lang', 'ru-RU');
    }
  }

  changeTheme(): void {
    if (this.theme === 'brightness_7') {
      this.theme = 'brightness_3';
      this.changeThemeS.changeToDark();
      localStorage.setItem('currentTheme', 'brightness_3');
    } else {
      this.theme = 'brightness_7';
      this.changeThemeS.changeToLight();
      localStorage.setItem('currentTheme', 'brightness_7');
    }
  }

  changeRgbCircleVisibility(): void {
    if (this.areCirclesVisibility.visibilityRgbCircle === false) {
      this.areCirclesVisibility.visibilityRgbCircle = true;
      this.visibilityIcon = 'visibility';
      localStorage.setItem('visibilityRgbCircle', 'true');
    } else {
      this.areCirclesVisibility.visibilityRgbCircle = false;
      this.visibilityIcon = 'visibility_off';
      localStorage.setItem('visibilityRgbCircle', 'false');
    }
  }

  openHelp(): void {
    const dialogRef = this.dialog.open(DialogComponent);
  }
}

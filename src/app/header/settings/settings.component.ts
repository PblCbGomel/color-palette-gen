import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeChangeServiceService } from 'src/app/services/theme-change-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @ViewChild('numberMenu') numberMenu: ElementRef | undefined;

  numberOfColors: String = 'filter_3';
  numberItems = [3, 4, 5, 6];
  theme: String = 'brightness_7';

  constructor(private changeThemeS: ThemeChangeServiceService) {}

  numberMenuClick(item: any) {
    this.numberOfColors = 'filter_' + item;
  }

  changeTheme() {
    if (this.theme === 'brightness_7') {
      this.theme = 'brightness_3';
      this.changeThemeS.changeToDark();
    } else {
      this.theme = 'brightness_7';
      this.changeThemeS.changeToLight();
    }
  }
}

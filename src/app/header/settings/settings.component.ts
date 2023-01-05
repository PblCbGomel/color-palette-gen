import { Component, ElementRef, ViewChild } from '@angular/core';

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

  numberMenuClick(item: any) {
    this.numberOfColors = 'filter_' + item;
  }

  changeTheme() {
    this.theme =
      this.theme === 'brightness_7' ? 'brightness_3' : 'brightness_7';
  }
}

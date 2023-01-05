import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeChangeServiceService {
  themeLink = document.getElementById('app-theme') as HTMLLinkElement;

  changeToDark() {
    if (this.themeLink) {
      this.themeLink.href = 'dark-theme.css';
    }
  }

  changeToLight() {
    if (this.themeLink) {
      this.themeLink.href = 'light-theme.css';
    }
  }
}

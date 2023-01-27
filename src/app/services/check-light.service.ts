import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckLightService {
  hexToRgb(hex: string): number[] {
    hex = hex.replace('#', '');
    let arrayHex = hex.match(/.{1,2}/g) || ['0', '0', '0'];
    return [
      parseInt(arrayHex[0], 16),
      parseInt(arrayHex[1], 16),
      parseInt(arrayHex[2], 16),
    ];
  }

  getLight(hex: string): string {
    let rgbArray = this.hexToRgb(hex);
    let luminance =
      (0.299 * rgbArray[0] + 0.587 * rgbArray[1] + 0.114 * rgbArray[2]) / 255;
    if (luminance > 0.5) {
      return 'black';
    }
    return 'white';
  }
}

import { Injectable } from '@angular/core';
import { RandomColor } from 'angular-randomcolor';

@Injectable({
  providedIn: 'root',
})
export class GenerateRandomColorService {
  generateColor(): String {
    return RandomColor.generateColor();
  }
}

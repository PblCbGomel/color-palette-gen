import { Component } from '@angular/core';
import { ColorCountService } from '../services/color-count.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  currentNumber: number = Number(localStorage.getItem('currentNumber')) || 4;
  arrayOfBlock: number[] = [];

  constructor(private colorCountService: ColorCountService) {
    colorCountService.currentNumberOfBlocks$.subscribe((count) => {
      this.currentNumber = count;
      this.arrayOfBlock = [];
      for (let i = 0; i < this.currentNumber; ++i) {
        this.arrayOfBlock.push(100 / this.currentNumber);
      }
    });
    this.colorCountService.currentNumberOfBlocks$.next(
      Number(localStorage.getItem('currentNumber')) || 4
    );
  }
}

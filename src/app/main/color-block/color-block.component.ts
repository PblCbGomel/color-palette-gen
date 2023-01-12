import { Component, OnInit } from '@angular/core';
import { GenerateRandomColorService } from 'src/app/services/generate-random-color.service';

@Component({
  selector: 'app-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.scss'],
})
export class ColorBlockComponent implements OnInit {
  selectedColor: String = '';
  lockIcon = 'lock_open';
  isLocked: boolean = false;

  constructor(private GenerateColorService: GenerateRandomColorService) {}

  ngOnInit(): void {
    this.selectedColor = this.GenerateColorService.generateColor();
  }

  changeLock(): void {
    if (this.isLocked === true) {
      this.isLocked = false;
      this.lockIcon = 'lock_open';
    } else {
      this.isLocked = true;
      this.lockIcon = 'lock';
    }
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import { CheckLightService } from 'src/app/services/check-light.service';
import { GenerateRandomColorService } from 'src/app/services/generate-random-color.service';
import { VisibilityRgbCircleService } from 'src/app/services/visibility-rgb-circle.service';

@Component({
  selector: 'app-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.scss'],
})
export class ColorBlockComponent implements OnInit {
  selectedColor: string = '';
  lockIcon: string = 'lock_open';
  isLocked: boolean = false;
  color: string = 'white';

  constructor(
    private GenerateColorService: GenerateRandomColorService,
    private checkLight: CheckLightService,
    public areCirclesVisibility: VisibilityRgbCircleService
  ) {}

  ngOnInit(): void {
    this.selectedColor = this.GenerateColorService.generateColor();
    this.color = this.checkLight.getLight(this.selectedColor);
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

  @HostListener('document:keypress', ['$event'])
  changeColor(e: KeyboardEvent): void {
    if (this.isLocked === false && e.code === 'Space') {
      this.selectedColor = this.GenerateColorService.generateColor();
      this.color = this.checkLight.getLight(this.selectedColor);
    }
    console.log(this.color);
  }
}

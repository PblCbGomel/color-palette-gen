import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.scss'],
})
export class ColorBlockComponent implements OnInit {
  selectedColor: String = '#c32af3';

  constructor() {}

  ngOnInit(): void {}
}

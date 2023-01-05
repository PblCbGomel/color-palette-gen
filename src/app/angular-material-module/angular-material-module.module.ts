import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
})
export class AngularMaterialModuleModule {}

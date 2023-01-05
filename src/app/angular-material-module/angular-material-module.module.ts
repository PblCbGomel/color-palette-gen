import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ],
})
export class AngularMaterialModuleModule {}

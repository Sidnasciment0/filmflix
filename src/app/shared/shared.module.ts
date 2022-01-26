import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { SspPipe } from './pipes/ssp/ssp.pipe';




@NgModule({
  declarations: [
    SspPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    SspPipe
  ]
})
export class SharedModule { }

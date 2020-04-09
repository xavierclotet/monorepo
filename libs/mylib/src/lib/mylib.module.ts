import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MylibComponent } from './mylib/mylib.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MylibComponent],
  exports: [
    MylibComponent
  ]
})
export class MylibModule {}

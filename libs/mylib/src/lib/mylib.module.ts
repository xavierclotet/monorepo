import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MylibComponent } from './mylib/mylib.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { PageTitleComponent } from './page-title/page-title.component';
@NgModule({
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzAlertModule
  ],
  declarations: [MylibComponent, PageTitleComponent],
  exports: [
    MylibComponent, PageTitleComponent
  ]
})
export class MylibModule {}

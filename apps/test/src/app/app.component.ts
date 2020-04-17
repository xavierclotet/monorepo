import { Component } from '@angular/core';
import { MyInterface } from '@xavitest/test-interface';
@Component({
  selector: 'xavitest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  message: MyInterface = {
    message: 'hola'
  }
}

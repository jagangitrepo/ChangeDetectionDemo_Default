import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'header',
  template: '<h1>{{title}}</h1>'
})
export class HeaderComponent {
  title:string;
}
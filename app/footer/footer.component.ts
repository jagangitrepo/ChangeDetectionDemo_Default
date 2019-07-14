import { Component, ChangeDetectionStrategy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent {
  triggerchangedetection: any
  onStart() {
    if (this.triggerchangedetection === undefined) {
      this.triggerchangedetection = interval(1000);
      this.triggerchangedetection.subscribe(
        function (n) {
          console.log(`It's been ${n} seconds since subscribing!`)
        },
        function (err) {
          console.log('Error: ' + err);
        },
        function () {
          console.log('Completed');
        });
    }
  }
}
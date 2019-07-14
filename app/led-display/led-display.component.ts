import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';

export interface Tile {
  color: string;
  id: number;
  text: string;
}

@Component({
  selector: 'led-display',
  templateUrl: 'led-display.component.html',
  styles:['mat-grid-tile {  background: lightblue; }']
})
export class LEDDisplayComponent {
    @Input()
    tiles: Tile[] = [
    { text: 'One', id: 1, color: 'lightblue' },
    { text: 'Two', id: 2, color: 'lightgreen' },
    { text: 'Three', id: 3, color: 'lightpink' },
    { text: 'four', id: 4, color: 'lightblue' },
    { text: 'five', id: 5, color: 'lightgreen' },
    { text: 'six', id: 6, color: 'lightpink' },
    { text: 'seven', id: 7, color: 'lightblue' },
    { text: 'eight', id: 8, color: 'lightgreen' },
    { text: 'nine', id: 9, color: 'lightpink' }
  ];

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
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { interval, from } from 'rxjs';

export interface Tile {
  color: string;
  id: number;
  text: string;
}

@Component({
  selector: 'led-display',
  templateUrl: 'led-display.component.html',
  styles: ['mat-grid-tile {  background: lightblue; }']
})
export class LEDDisplayComponent implements OnInit, OnDestroy {
  @Input()
  tiles: Tile[];

  data:any
  constructor()
  {
    this.data = from(fetch('http://www.mocky.io/v2/5d2ae467310000280058218a'));
  }

  ngOnInit() {
    this.data.subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });
  }

  ngOnDestroy()
  {
    this.data.unsubscribe();
  }
}
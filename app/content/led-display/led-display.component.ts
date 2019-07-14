import { Component, Input, OnInit, OnDestroy } from '@angular/core';

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
export class LEDDisplayComponent {
  @Input()
  tiles: Tile[];

  constructor() {

  }
}
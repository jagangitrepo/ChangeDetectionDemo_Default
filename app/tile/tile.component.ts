import { Component, Input } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: 'tile.component.html',
  styles:['mat-grid-tile {  background: lightblue; }']
})

export class TileComponent {
  @Input()
  bgcolor:string;

  @Input()
  text:string
}
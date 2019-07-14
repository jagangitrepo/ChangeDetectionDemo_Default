import { Component, Input } from '@angular/core';

@Component({
  selector: '[tile]',
  templateUrl: 'tile.component.html',
  
})

export class TileComponent {
  @Input()
  bgcolor:string;

  @Input()
  text:string
}
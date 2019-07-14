import { Component, OnInit } from '@angular/core';
import { interval, from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tile {
  color: string;
  id: number;
  text: string;
}
@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit{
  tiles: Tile[];
  constructor() {
    this.tiles =  [];
  }

ngOnInit()
{
  // fetch('https://www.mocky.io/v2/5d2ae8cf3100005300582192')
  //     .then((resp) => resp.json()) // Transform the data into json
  //     .then(function (data) {
  //       //this.tiles = JSON.parse(JSON.stringify(data));
  //       let temp = data["tiles"];
  //       this.tiles = temp;
  //       console.log(typeof(data["tiles"]))
  //     });

  
}
}
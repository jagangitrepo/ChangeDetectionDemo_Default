import { Component } from '@angular/core';
import { interval } from 'rxjs';

export interface Tile {
  color: string;
  id: number;
  text: string;
}

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'grid-list-overview-example',
  styleUrls: ['grid-list-overview-example.css'],
  templateUrl: 'grid-list-overview-example.html',
})
export class GridListOverviewExample {
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
  rendertask: any
  constructor() {
    this.rendertask = interval(1000);
    this.rendertask.subscribe(
      function (x) {
        console.log("hello")
      },
      function (err) {
        console.log('Error: ' + err);
      },
      function () {
        console.log('Completed');
      });

  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
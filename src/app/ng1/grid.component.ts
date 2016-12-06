import { Component } from '@angular/core';
import { Http, Response } from "@angular/http";

import "rxjs/add/operator/map";

@Component({
  selector: 'app-grid',
  template: '<ui-grid [data]="myData"></ui-grid>',
})
export class GridComponent {
  myData = [];
  constructor(public http: Http) {

    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .map((response: Response) => response.json())
      .subscribe((data) => {
        this.myData = data;
      });
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  template: `
  <input type="text" [(ngModel)]="name" />
  {{name}}
  `,
  styles: []
})
export class TwowayComponent implements OnInit {

  public name = "Javascript"
  constructor() { }

  ngOnInit(): void {
  }

}

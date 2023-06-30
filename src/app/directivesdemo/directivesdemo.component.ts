import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivesdemo',
  templateUrl: './directivesdemo.component.html',
  styleUrls: ['./directivesdemo.component.css']
})
export class DirectivesdemoComponent implements OnInit {

  constructor() { }

  public displayName = false
  public color = "orange"
  public colors = ["red", "blue", "green", "yellow"]
  ngOnInit(): void {
  }

}

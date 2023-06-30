import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propbinding',
  templateUrl: './propbinding.component.html',
  styleUrls: ['./propbinding.component.css']
})
export class PropbindingComponent implements OnInit {

  constructor() { }

  public myId = 'ID';
  public isDisabled = false;
  ngOnInit(): void {
  }

}

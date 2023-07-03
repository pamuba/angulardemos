import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  @Input() parentName:any;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  fireevent(){
    this.childEvent.emit("Data from Child")
  }
}

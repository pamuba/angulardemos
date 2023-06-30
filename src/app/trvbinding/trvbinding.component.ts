import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trvbinding',
  templateUrl: './trvbinding.component.html',
  styleUrls: ['./trvbinding.component.css']
})
export class TrvbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logMessage(myval:any){
    console.log(myval)
  }

}

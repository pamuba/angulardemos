import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
     <h2>Employee List</h2>
     <ul *ngFor="let emp of Employees">
      <li>{{emp.name}}</li>
     </ul> 
  `,
  styles: [`
  `]
})
export class EmployeeListComponent implements OnInit {

  public Employees = [
    {"id":1,"name":"John Smith", "age":25},
    {"id":2,"name":"Sam Jose", "age":35},
    {"id":3,"name":"Mike Getting", "age":45}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

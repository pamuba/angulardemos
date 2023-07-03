import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: `
     <h2>Employee Detail</h2>
     <ul *ngFor="let emp of Employees">
      <li>{{emp.id}} {{emp.name}} {{emp.age}}</li>
     </ul> 
  `,
  styles: [`
  
  `]
})
export class EmployeeDetailComponent implements OnInit {

  public Employees = [
    {"id":1,"name":"John Smith", "age":25},
    {"id":2,"name":"Sam Jose", "age":35},
    {"id":3,"name":"Mike Getting", "age":45}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

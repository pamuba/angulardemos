import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

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

  public Employees:any = []
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
         .subscribe(data => this.Employees = data)
  }

}

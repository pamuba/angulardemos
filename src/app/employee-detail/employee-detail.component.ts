import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

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

  public Employees:any = []
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
         .subscribe(data => this.Employees = data)
  }

}

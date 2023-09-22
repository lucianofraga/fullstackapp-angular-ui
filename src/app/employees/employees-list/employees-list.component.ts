import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeesService } from '../shared/employees.service';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Observable<Employee[]> = of([]);

  constructor(private employeeService: EmployeesService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getAllEmployees().pipe(
      catchError((err, caught) => {
        console.error(err.message);
        return of([]);
      })
    );
  }
}

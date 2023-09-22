import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './shared/employees.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent, AddEmployeeComponent],
  imports: [CommonModule, EmployeesRoutingModule, HttpClientModule],
  providers:[HttpClientModule, EmployeesService]
})
export class EmployeesModule {}

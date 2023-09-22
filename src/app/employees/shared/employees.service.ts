import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseApiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllEmployees() {
    return this.httpClient.get<Employee[]>(`${this.baseApiUrl}/api/employees`)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, observable, Observable } from 'rxjs';
import { Employee } from '../model/employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  private apiURL="http://localhost:8080/api/v1"
  private baseUrl="http://localhost:8080/api/v1/employees"
  

   
  constructor(private httpClient : HttpClient) { }

   getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.apiURL + '/employees').pipe(
       data => {  return data; }
    );
    }


    createEmployee(employee: Employee): Observable<object> {
      return this.httpClient.post<Employee>(this.apiURL + '/employees', employee).pipe(
        data => {  return data; }
      );
    }
    getEmployeeById(id:number): Observable<Employee>{
      return this.httpClient.get<Employee>(this.baseUrl+'/'+id).pipe(
         data =>{return data;}
      );
    }

    
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.httpClient.put(this.baseUrl+'/'+id, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl+'/'+id, { responseType: 'text' });
  }
  
  }
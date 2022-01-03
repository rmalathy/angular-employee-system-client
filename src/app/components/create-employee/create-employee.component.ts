import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    console.log('Inside save employee');
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
       console.log(data);
       this.goToEmployeeList();
    },
  
       error => console.log (error));
  }
  goToEmployeeList(){
     this.router.navigate(['/employees']);
  } 

  onSubmit(){
     console.log('This is employee', this.employee);
     this.saveEmployee();
  }

}

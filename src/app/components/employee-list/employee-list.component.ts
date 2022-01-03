import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { UpdateEmployeeComponent } from 'src/app/update-employee/update-employee.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];

  constructor(private employeeService : EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
 
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employees = data;
     
    } );
    console.log(this.employees,'data')
   
  }

    
  updateEmployee(id : number){ 
    console.log('Update is called')
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{ data});
    this.getEmployees();
  }

}

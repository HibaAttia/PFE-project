import { Component, OnInit } from '@angular/core';
import {  EmployeService } from '../../../services/employe.service';
import { Observable } from 'rxjs';
import { Employe } from '../../../modals/employe';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-employes',
  templateUrl: './list-employes.component.html',
  styleUrls: ['./list-employes.component.css']
})
export class ListEmployesComponent implements OnInit {

  employe : Employe = new Employe();
  id : number; 
  employees: Employe[];
  p : number=1;
  constructor(private employeService:EmployeService,private router:Router, 
    private userService: UserService) { }

  ngOnInit() {
    this.getEmployees();
    
  }

  getEmployees(){
    this.employeService.getActiveEmployees().subscribe(
      response => {
        this.employees = response; }
     );
  }

  deleteEmploye(employe:Employe): void {
    this.employeService.deleteEmployeById(employe.idUser)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employe);

      })
    
  }

  archiveEmploye(employe:Employe) {
   
    this.employeService.archiveEmploye(employe.idUser)
    .subscribe( (employe) => {
      this.userService.toastMessage("Employee successfully archived")
      },(error) => {
        this.userService.toastMessage("Failed action")
      }
  ); 
    
  };

 
  updateUser(employe){  
    this.employeService.setter(employe);
    this.router.navigate(['/updateEmploye']);

  }
  

  

}

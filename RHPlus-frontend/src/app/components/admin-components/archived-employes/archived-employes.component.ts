import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';
import { Employe } from 'src/app/modals/employe';

@Component({
  selector: 'app-archived-employes',
  templateUrl: './archived-employes.component.html',
  styleUrls: ['./archived-employes.component.css']
})
export class ArchivedEmployesComponent implements OnInit {

  p : number=1;
  employees:Employe[];
  constructor(private employeService:EmployeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeService.getArchivedEmployees().subscribe(
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

}

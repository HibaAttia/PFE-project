import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';
import { Employe } from 'src/app/modals/employe';

@Component({
  selector: 'app-presence-admin',
  templateUrl: './presence-admin.component.html',
  styleUrls: ['./presence-admin.component.css']
})
export class PresenceAdminComponent implements OnInit {

  employees: Employe[];
  p : number=1;
  constructor(private employeService:EmployeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeService.getActiveEmployees().subscribe(
      response => {
        this.employees = response; }
     );
  }

}

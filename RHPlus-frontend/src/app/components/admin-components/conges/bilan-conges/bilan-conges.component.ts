import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/modals/employe';
import { EmployeService } from 'src/app/services/employe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bilan-conges',
  templateUrl: './bilan-conges.component.html',
  styleUrls: ['./bilan-conges.component.css']
})
export class BilanCongesComponent implements OnInit {

  employe : Employe = new Employe();
  id : number; 
  employees: Employe[];
  p : number=1;
  constructor(private employeService:EmployeService,private router:Router) { }

  ngOnInit() {
    this.getEmployees();
    
  }

  getEmployees(){
    this.employeService.getEmployeesList().subscribe(
      response => {
        this.employees = response; }
     );
  }

}

import { Component, OnInit } from '@angular/core';
import { Conge } from '../../../modals/conge';
import { Employe } from '../../../modals/employe';
import { EmployeService } from '../../../services/employe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile-employe',
  templateUrl: './profile-employe.component.html',
  styleUrls: ['./profile-employe.component.css']
})
export class ProfileEmployeComponent implements OnInit {

  id: number ;
  private sub: any ; 
  conge: Conge  = new Conge();
  employe: Employe = new Employe();
 
  constructor(private employeService:EmployeService,
    private userService:UserService, private route: ActivatedRoute,
    private router:Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getEmploye();
    console.log(this.id+"oooo");
  }

  getEmploye() {
    console.log(this.id);
    this.employeService.getEmploye(this.id).subscribe(
      response => {
        this.employe = response ; }
    );
  }

  generateReport(){
    this.employeService.generateReport(this.id).subscribe(
      (employe) => {
        this.userService.toastMessage("Informations are successfully exported")
        },(error) => {
          this.userService.toastMessage("Informations are successfully exported")
        }
    );
  }

 

  updatePhoto(employe){  
    this.employeService.setter(employe);
    this.router.navigate(['/updatePhoto']);

  }


}

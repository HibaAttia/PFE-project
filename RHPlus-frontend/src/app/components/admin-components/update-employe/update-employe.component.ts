import { Component, OnInit } from '@angular/core';
import { Employe } from '../../../modals/employe';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from '../../../services/employe.service';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {

  id: number ; 
  private employe: Employe ; 
  public fileImage: File;
  public message: string;

  constructor(private route: ActivatedRoute, private router:Router,
    private employeService: EmployeService) { }

  ngOnInit() {
      this.employe = this.employeService.getter();
    }

  
    processForm(){
      
         this.employeService.editUser(this.employe).subscribe((employe)=>{
           console.log(employe);
           this.router.navigate(['/listEmployes']);
         },(error)=>{
           console.log(error);
         });
      }

  }



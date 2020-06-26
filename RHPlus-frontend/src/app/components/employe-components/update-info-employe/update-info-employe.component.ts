import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/modals/employe';
import { EmployeService } from 'src/app/services/employe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-info-employe',
  templateUrl: './update-info-employe.component.html',
  styleUrls: ['./update-info-employe.component.css']
})
export class UpdateInfoEmployeComponent implements OnInit {


  id: number ; 
  private employe: Employe ;
  public fileImage : File;
  public message: string;

  constructor(private route: ActivatedRoute, private router:Router,
    private employeService: EmployeService) { }

  ngOnInit() {
    this.employe = this.employeService.getter();
  }

  processForm(){
      
    this.employeService.editUser(this.employe).subscribe((employe)=>{
      console.log(employe);
      this.router.navigate(['/info-employe', this.employe.idUser]);
    },(error)=>{
      console.log(error);
    });
 }

 onSelectFile(event) {
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.fileImage = file;
   // this.f['profile'].setValue(file);

  var mimeType = event.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  }
}

}

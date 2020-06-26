import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from 'src/app/services/employe.service';
import { Employe } from 'src/app/modals/employe';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-update-photo',
  templateUrl: './update-photo.component.html',
  styleUrls: ['./update-photo.component.css']
})
export class UpdatePhotoComponent implements OnInit {

  private employe: Employe ; 
  public fileImage: File;
  public message: string;
  id:number;
  constructor(private route: ActivatedRoute, private router:Router,private tokenStorageService: TokenStorageService,
    private employeService: EmployeService) { }

  ngOnInit() {
    this.employe = this.employeService.getter();
    const user = this.tokenStorageService.getUser();
    this.id = user.id;

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

  processForm(){
      
    this.employeService.updateEmployee(this.employe,this.fileImage).subscribe((employe)=>{
      console.log(employe);
    },(error)=>{
      console.log(error);
    });
    this.router.navigate(['/profilEmploye', this.employe.idUser]);
 }

}

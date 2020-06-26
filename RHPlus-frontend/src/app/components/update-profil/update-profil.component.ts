import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Employe } from 'src/app/modals/employe';
import { EmployeService } from 'src/app/services/employe.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {
  avatar = './assets/img/avatar.jpg';
  username: string;
  email : String ;
  id:any;
  password : String ;
  newPassword: any;
  oldPassword:any;
  private employe: Employe ; 
  public fileImage: File;
  public message: string;
  constructor(private userService: UserService, private employeService: EmployeService,
     private tokenStorageService: TokenStorageService,private router: Router, private _snackbar: MatSnackBar ) { }

  ngOnInit() {
    this.getEmploye();
    const user = this.tokenStorageService.getUser();
    this.id = user.id;
    this.userService.getUserAvatar(this.id).subscribe(
      (res: any) => {
        this.avatar = res;
      }
    )
    console.log(this.id);
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    
  }


  getEmploye() {
    const user = this.tokenStorageService.getUser();
    console.log(user.id);
    this.employeService.getEmploye(user.id).subscribe(
      response => {
        this.employe = response ; 
      console.log(this.employe+"here")}
    );
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
      const user = this.tokenStorageService.getUser();
      this.employeService.setter(this.employe);
      this.employeService.updateEmployee(this.employe,this.fileImage)
      .subscribe((employe)=>{
       this.userService.toastMessage('Profile has updated successfully');
       this.userService.getUserAvatar(user.id);
       window.location.reload();
      },(error)=>{
       this.userService.toastMessage('Please try again')
      });

   }

   updatePassword(){
    this.userService.updatePassword(this.email,this.oldPassword,this.newPassword).subscribe( 
       data => {
      this.userService.toastMessage('Password changed successfully');
    }
    ,(error)=>{
      this.userService.toastMessage('Failed action')
     } ); 
    
    }

  

  updatePhoto(employe){  
    this.employeService.setter(employe);
  }

}

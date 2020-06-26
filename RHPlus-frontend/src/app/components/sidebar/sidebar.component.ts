import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Employe } from 'src/app/modals/employe';
import { EmployeService } from 'src/app/services/employe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  username: string;
  email : String ;
  employe : Employe = new Employe();
  id : number;
  img : boolean;
  fullImg : boolean;
  emptyImg : boolean;
  
  

  constructor(private tokenStorageService: TokenStorageService,
    private userService: UserService,private employeService :EmployeService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
      this.id = user.id;

     // const empol = this.employeService.getEmploye(this.id);
      //this.email = empol.email;
    }

    this.getEmploye();
    console.log(this.userService.getUserAvatar(this.id))
    if (this.userService.getUserAvatar(this.id) === null)
      this.img = false;
    else this.img =true;
  }

  logout() {
    this.tokenStorageService.signOut();
    
  }

  getEmploye() {
    console.log(this.id);
    this.employeService.getEmploye(this.id).subscribe(
      response => {
        this.employe = response ; }
    );
  }

}

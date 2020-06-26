import { Component, OnInit } from '@angular/core';
import {NgbModalConfig , NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CongeService } from 'src/app/services/conge.service';
import { Conge } from 'src/app/modals/conge';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DemandeCongeComponent implements OnInit {

  conge: Conge = new Conge();
  id : number;
  constructor( private congeService:CongeService,
    private tokenStorageService: TokenStorageService,
    private userService: UserService) {
    
  }

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.id = user.id;
  }

  createDemandeConge():void {
    this.congeService.createDemandeConge(this.conge,this.id)
    .subscribe( data => {
      this.userService.toastMessage("Demand created successfully")
     },(error) => {
      this.userService.toastMessage("failed action")
  }
  );
}

}



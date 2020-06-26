import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/modals/conge';
import { CongeService } from 'src/app/services/conge.service';
import { MatDialogConfig, MatDialog } from '@angular/material';



@Component({
  selector: 'app-list-conges',
  templateUrl: './list-conges.component.html',
  styleUrls: ['./list-conges.component.css']
})
export class ListCongesComponent implements OnInit {

  isPopupOpened = false;
  conge : Conge = new Conge();
  conges : any;
  constructor(private congeService:CongeService,private dialog: MatDialog) { }

  ngOnInit() {
    this.getConges();
  }

  getConges(){
    this.congeService.getCongesList().subscribe(
      response => {
        this.conges = response
      console.log(response)}
     );
     
  }

  

  onAcceptConge(id) {
    console.log(id+"hell");
    this.congeService.acceptConge(id)
    .subscribe(  data => {
      alert("Holiday accepted");
    });
  };

  onRefuseConge(id) {
    this.congeService.refuseConge(id)
    .subscribe(  data => {
      alert("Holiday refused");
    });
  };

  onDeleteConge(id){
    this.congeService.deleteConge(id)
    .subscribe(  data => {
      alert("Holiday deleted successfully");
    });
  }



}

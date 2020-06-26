import { Component, OnInit } from '@angular/core';
import { NoteInterne } from 'src/app/modals/noteInterne';
import { AjoutNoteComponent } from '../../admin-components/notes/ajout-note/ajout-note.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { NoteinterneService } from 'src/app/services/noteinterne.service';
import { Presence } from 'src/app/modals/presence';
import { PresenceService } from 'src/app/services/presence.service';
import { AddPresenceComponent } from '../add-presence/add-presence.component';


@Component({
  selector: 'app-timetracking',
  templateUrl: './timetracking.component.html',
  styleUrls: ['./timetracking.component.css']
})
export class TimetrackingComponent implements OnInit {



  presence : Presence = new Presence();
  presences:Presence[];
  constructor(private dialog: MatDialog, private presenceService:PresenceService) { }

  ngOnInit() {
    this.refreshData();
  }

  /*onAddNote(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true ; 
    dialogConfig.autoFocus = true ; 
    dialogConfig.width = "100%";
    dialogConfig.width = "400px";
    let dialogRef = this.dialog.open(AjoutNoteComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
      this.refreshData();
    });
  }*/

  onAddPresence():void {
    this.presenceService.createPresence(this.presence)
    .subscribe( data => {
      alert("Presence noted");
    });
  }


  refreshData(){
    this.presenceService.getPresences()
    .subscribe(
      response => {
        this.presences = response; }
     );
  }

  /*deleteNote(noteInterne:NoteInterne): void {
    this.presenceService.deleteNoteById(noteInterne.id)
      .subscribe( data => {
        this.presences = this.presences.filter(u => u !== this.presence);
      })
    
  }*/


}

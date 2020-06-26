import { Component, OnInit } from '@angular/core';
import { NoteInterne } from 'src/app/modals/noteInterne';
import { NoteinterneService } from 'src/app/services/noteinterne.service';

@Component({
  selector: 'app-notes-internes-employe',
  templateUrl: './notes-internes-employe.component.html',
  styleUrls: ['./notes-internes-employe.component.css']
})
export class NotesInternesEmployeComponent implements OnInit {

  noteInterne : NoteInterne = new NoteInterne();
  notesInternes:NoteInterne[];

  constructor(private noteInterneService:NoteinterneService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData(){
    this.noteInterneService.getAllNoteIntern()
    .subscribe(
      response => {
        this.notesInternes = response; }
     );
  }

}

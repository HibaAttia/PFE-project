import { Component, OnInit } from '@angular/core';
import { NoteInterne } from 'src/app/modals/noteInterne';
import { Router } from '@angular/router';
import { NoteinterneService } from 'src/app/services/noteinterne.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  private noteInterne: NoteInterne ;

  constructor(private noteInterneService:NoteinterneService,private router:Router) { }

  ngOnInit() {
    this.noteInterne = this.noteInterneService.getter();
  }

  processForm(){
      
    this.noteInterneService.updateNoteInterne(this.noteInterne).subscribe((noteInterne)=> {
      console.log(noteInterne);
      this.router.navigate(['/notesInternes']);
    },(error)=>{
      console.log(error);
    });
 }

}

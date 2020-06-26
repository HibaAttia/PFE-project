import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NoteInterne } from 'src/app/modals/noteInterne';
import { NoteinterneService } from 'src/app/services/noteinterne.service';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { PostPayload } from 'src/app/modals/post-payload';

@Component({
  selector: 'app-ajout-note',
  templateUrl: './ajout-note.component.html',
  styleUrls: ['./ajout-note.component.css']
})
export class AjoutNoteComponent implements OnInit {
  
  addPostForm: FormGroup;
  postPayload: PostPayload;
  title = new FormControl('');
  body = new FormControl('');

  constructor(public dialogRef:MatDialogRef<AjoutNoteComponent>,private addpostService: NoteinterneService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });
    this.postPayload = {
      id: '',
      content: '',
      title: '',
      username: ''
    }
  }

  ngOnInit() {
  }

  onSubmit(){
    this.addPost();
    this.onClose();
  }

  addPost() {
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.addpostService.addPost(this.postPayload).subscribe(data => {
    this.router.navigate(['/notesInternes']);
    }, error => {
      console.log('Failure Response');
    })
  }

  onClose(){
    this.dialogRef.close();
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoteInterne } from '../modals/noteInterne';
import { Observable } from 'rxjs';
import { PostPayload } from '../modals/post-payload';

@Injectable({
  providedIn: 'root'
})
export class NoteinterneService {

  noteInterne: NoteInterne = new NoteInterne;
  
  constructor(private httpClient:HttpClient) { }

  getAllNoteIntern():Observable<any> {
    return this.httpClient.get<any>("http://localhost:8080/notes");
   }

  /*public onCreateNoteInterne(noteInterne) {
   return this.httpClient.post<any>("http://localhost:8080/createNoteInterne",noteInterne);
  }*/

  public deleteNoteById (id: number)  {
    return this.httpClient.delete("http://localhost:8080/notes"+"/" + id);
  }

  public updateNoteInterne(noteInterne:NoteInterne) {
    return this.httpClient.put("http://localhost:8080/annonce",noteInterne);
  }

  setter(noteInterne:NoteInterne){
    this.noteInterne= noteInterne;
  }

  getter(){
   return this.noteInterne;
 }

 addPost(postPayload: PostPayload){
  return this.httpClient.post('http://localhost:8080/createNoteInterne', postPayload);
}


}

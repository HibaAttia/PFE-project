import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../modals/candidate';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})

export class CandidateService {

  candidate: Candidate = new Candidate();
  constructor(private httpClient:HttpClient, private _snackbar: MatSnackBar) { }

  public createCandidate(candidate, fileCV:File, fileLettre:File) {

    const data:FormData= new FormData();
    data.append('candidate',JSON.stringify(candidate));
    data.append('cv_file',fileCV);
    data.append('motiv_letter_file',fileLettre);

    return this.httpClient.post<Candidate>("http://localhost:8080/createcandidate", data);
  }

  public getCandidatesList(){
    console.log('test');
    return this.httpClient.get<any>("http://localhost:8080/candidats");
  }

  public getCandidate(id: number){
    return this.httpClient.get<Candidate>("http://localhost:8080/candidat"+"/"+ id);
  }

  public downloadFile(pathCv:String){
    
    return this.httpClient.get<any>("http://localhost:8080//downloadFile"+"/"+ pathCv);
  }

  public sendConfirmMessage(id:number){
    return this.httpClient.get<any>("http://localhost:8080/sendConfirmMessage/"+ id);
  }

  public sendDenyMessage(id:number){
    return this.httpClient.get<any>("http://localhost:8080/sendDenyMessage/"+ id);
  }

  deleteCandidate(id: number) {
    return this.httpClient.delete("http://localhost:8080/candidate/" + id);
      
  }

  toastMessage(message){
    this._snackbar.open(message, 'Close', {
      duration: 10000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
     })
  }

  

/*
  saveUserProfile(formData: FormData){
    return this.httpClient.post("http://localhost:8080/candidats/create", formData);
    
  }*/
}

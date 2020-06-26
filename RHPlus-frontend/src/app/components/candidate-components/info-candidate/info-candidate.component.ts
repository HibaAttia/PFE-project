import { Component, OnInit } from '@angular/core';
import { UploadfileService } from '../../../services/uploadfile.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { CandidateService } from '../../../services/candidate.service';
import { FormGroup } from '@angular/forms';
import { Candidate } from 'src/app/modals/candidate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-candidate',
  templateUrl: './info-candidate.component.html',
  styleUrls: ['./info-candidate.component.css']
})
export class InfoCandidateComponent implements OnInit {

  public fileCV: File;
  public fileLettre : File;

  user: Candidate = new Candidate();

  constructor(private candidateService:CandidateService,
              private uploadService: UploadfileService,
              private router: Router) { }

  ngOnInit() {
  }

  
   /*saveForm(submitForm: FormGroup){
     if (submitForm.valid){
       const user = submitForm.value;
       const formData = new formData;
       formData.append('user', user);
       formData.append('file', this.userFile);
       this.candidateService.saveUserProfile(formData).subscribe(  data => {
        alert("candidate created successfully");
      } );

     } else {
       this.validateFormFields(submitForm);
     }

     }*/

   

  createCandidate() {
    this.candidateService.createCandidate(this.user,this.fileCV,this.fileLettre)
      .subscribe(  data => {
        alert("candidate created successfully");
      } );
      this.router.navigate(['/response']);
    
    };


  selectFileLettre(event){
    this.fileLettre = event.target.files[0];
  }
  selectFileCV(event){
    this.fileCV = event.target.files[0];
  }
  

  }

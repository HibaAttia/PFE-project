import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { Observable } from 'rxjs';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidate } from 'src/app/modals/candidate';
import { FileDownloadService } from 'src/app/services/file-download.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-recrutements',
  templateUrl: './recrutements.component.html',
  styleUrls: ['./recrutements.component.css']
})
export class RecrutementsComponent implements OnInit {
 
  
  candidats: Candidate[];
  candidate: Candidate = new Candidate ; 
  
  
  constructor(  private candidateService :CandidateService,
                private emailService: EmailService,
                private fileDownloadService :FileDownloadService) {}


  ngOnInit() {
    this.getCandidats();
  }

  onSendMessage(){
    this.emailService.sendEmail();
  }

  getCandidats(){
    this.candidateService.getCandidatesList().subscribe(
      response => {
        this.candidats = response; }
  );
}

downloadFile(fileName){
  
  this.fileDownloadService.downloadFile({'filename':fileName})
  .subscribe(data => {
    
    saveAs(new Blob([data],{type:"application/pdf"}),fileName);

  })

}

download(candidate :Candidate){
 
  console.log("hello",this.candidate)
  this.candidateService.downloadFile(candidate.pathCv)
  .subscribe( data =>  {
    alert ("file downloaded succeffully");
  })
}

deleteTodo(candidate:Candidate): void {
  this.candidateService.deleteCandidate(candidate.idUser)
    .subscribe( data => {
      this.candidats = this.candidats.filter(u => u !== candidate);
    })
  
}

/*downloadFile(){
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', '_File_Saved_Path');
  link.setAttribute('download', 'file_name.pdf');
  document.body.appendChild(link);
  link.click();
  link.remove();
  }*/
  
}


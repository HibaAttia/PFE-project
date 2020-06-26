import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidate } from 'src/app/modals/candidate';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil-candidat',
  templateUrl: './profil-candidat.component.html',
  styleUrls: ['./profil-candidat.component.css']
})
export class ProfilCandidatComponent implements OnInit {

  id: number ;
  candidate : Candidate = new Candidate();
  constructor(private route: ActivatedRoute, private candidateService : CandidateService,
    private userService : UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getCandidate();
    
  }

  getCandidate() {
    console.log(this.id);
    this.candidateService.getCandidate(this.id).subscribe(
      response => {
        this.candidate = response ; }
    );
  }

  sendConfirmMsg(id) {
    this.candidateService.sendConfirmMessage(id).subscribe(  (candidate) => {
      this.userService.toastMessage("Email sent successffully")
    },(error) =>{
      this.userService.toastMessage("Email sent successffully")
    }
    );
    
  };

  

  sendDenyMsg(id) {
    this.candidateService.sendDenyMessage(id)
    .subscribe( (candidate) =>{
      this.userService.toastMessage("Email sent successffully")
    },(error) =>{
      this.userService.toastMessage("Email sent successffully")
    }
    );
   
  };

}

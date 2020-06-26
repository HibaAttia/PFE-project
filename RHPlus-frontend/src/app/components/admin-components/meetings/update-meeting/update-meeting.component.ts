import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MeetingService } from 'src/app/services/meeting.service';
import { Meeting } from 'src/app/modals/meeting';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-meeting',
  templateUrl: './update-meeting.component.html',
  styleUrls: ['./update-meeting.component.css']
})
export class UpdateMeetingComponent implements OnInit {

  private meeting: Meeting ; 

  constructor(private meetingService:MeetingService,private router:Router) { }

  ngOnInit() {
    this.meeting = this.meetingService.getter();
    
  }

  processForm(){
      
    this.meetingService.updateMeeting(this.meeting).subscribe((meeting)=> {
      console.log(meeting);
      this.router.navigate(['/meetings']);
    },(error)=>{
      console.log(error);
    });
 }

}

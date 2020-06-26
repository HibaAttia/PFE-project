import { Component, OnInit } from '@angular/core';
import { MeetingComponent } from '../meeting/meeting.component';
import { Meeting } from 'src/app/modals/meeting';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MeetingService } from 'src/app/services/meeting.service';
import { UpdateMeetingComponent } from '../update-meeting/update-meeting.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit {
  meeting : Meeting = new Meeting() ;
  meetings : Meeting[] ;
  
  constructor(private dialog:MatDialog, private meetingService:MeetingService
    ,private router:Router) { }

  ngOnInit() {
    this.getAllmeetings();
  }

  onAddNote() {
   this.openNoteDialog(null)
  }

  openNoteDialog(data?: any){
    const dialogRef = this.dialog.open(MeetingComponent, {
      disableClose: true,
      autoFocus : true ,
      width : "50%",
      data: data
    } );

    dialogRef.afterClosed().subscribe(result => {
      if(result && data == null){
        this.meetings.push(result);
      }
      // this.refreshData();
    });
  }

  getAllmeetings() {
    this.meetingService.getAllmeetings()
    .subscribe(
      response => {
        this.meetings = response; }
     );
  }

  updateMeeting(meeting) {  
    this.openNoteDialog(meeting);
    // this.meetingService.setter(meeting);
    // this.router.navigate(['/updateMeeting']);
  }

  deleteMeeting(meeting:Meeting): void {
    this.meetingService.deleteMeetingById(meeting.idMeeting)
      .subscribe( data => {
        this.meetings = this.meetings.filter(u => u !== meeting);
      })
    
  }


}

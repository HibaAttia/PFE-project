import { Component, OnInit } from '@angular/core';
import dayGridView from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-holiday-calendar',
  templateUrl: './holiday-calendar.component.html',
  styleUrls: ['./holiday-calendar.component.css']
})
export class HolidayCalendarComponent implements OnInit {

  calendarPlugins=[dayGridView, interactionPlugin];
  calendarEvents: EventInput[] = [];

  constructor() { }

  ngOnInit() {
  }

  dayRender(args){
    var cell:HTMLElement = args.el ; 
    cell.ondblclick = (ev:MouseEvent) =>{
      this.addEvent(args.date);
    }
    
  }

  addEvent(date){
    var title = prompt ("Ajouter le nombre des heures de travail");
    if (title == '') return;

    this.calendarEvents = this.calendarEvents.concat({
      title:title,
      start:date,
      end:date
    })

}

}

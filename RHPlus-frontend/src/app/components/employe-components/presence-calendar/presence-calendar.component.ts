import { Component, OnInit } from '@angular/core';
import dayGridView from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput } from '@fullcalendar/core';
import { PresenceService } from 'src/app/services/presence.service';
import { Evenement } from 'src/app/modals/event';
import { Presence } from 'src/app/modals/presence';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-presence-calendar',
  templateUrl: './presence-calendar.component.html',
  styleUrls: ['./presence-calendar.component.css']
})
export class PresenceCalendarComponent implements OnInit {

  calendarPlugins=[dayGridView, interactionPlugin];
  calendarEvents: EventInput[] = [];
  event: Evenement = new Evenement();
  events:Evenement[];
  presence:Presence = new Presence();
  id: any ;


  constructor(private presenceService: PresenceService,private route: ActivatedRoute ) { }

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    this.getPresence(this.id);
  });
  }

  

  dayRender(args){
    console.log("dayRender")
    console.log(args)
    var cell:HTMLElement = args.el ; 
    cell.ondblclick = (ev:MouseEvent) =>{
      this.addEvent(args.date);
    }
    
  }


  addEvent(date){
   
      var title = prompt ("Ajouter le nombre des heures de travail");
      
      if (title == '') return;
      console.log("addevent")
      console.log((date.getMonth()+1).toString().length)
      let pres = new Presence();
      pres.nbrheures = Number(title);
      pres.day =date.getFullYear()+"-"+((date.getMonth()+1).toString().length == 1 ? "0"+(date.getMonth()+1):(date.getMonth()+1))+"-"+(date.getDate().toString().length == 1 ? "0"+date.getDate():date.getDate());
      console.log(pres)
      this.addPresence(pres,this.id);
      this.calendarEvents = this.calendarEvents.concat({
        title:title,
        start:date
      })

      /*this.calendarEvents = this.calendarEvents.concat({
        title:title,
        start:date
      })*/
  }

  addPresence(presence,id){
    this.presenceService.addPresence(presence,id).subscribe(
      response => {
        this.events = response; }
     );
  }

  getPresence(id){
    this.presenceService.getPresence(id).subscribe(
      response => {
        console.log(response);
       // var res = JSON.parse(response); 
        response.forEach((element:Presence) => {
        this.calendarEvents = this.calendarEvents.concat({
          title:""+element.nbrheures,
          start:element.day
        })  
        });
        
      }
     );
  }



  

  

}

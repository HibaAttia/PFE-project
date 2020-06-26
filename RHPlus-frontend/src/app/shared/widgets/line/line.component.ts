import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  highcharts = Highcharts;
   chartOptions = {};

  constructor() { }

  ngOnInit() {

    this.chartOptions = {
      
      chart: {
        type: "spline"
     },

     title: {
      text: "Number of employees per year"
   },

     xAxis:{
      title:{
        text:"Years"
     } ,
      categories:["2017", "2018", "2019", "2020"]
   },

   yAxis: {          
    title:{
       text:"Number of employees"
    } 
 }, 

 tooltip: {
  split: true,
  valueSuffix: ' people'
},

exporting: {
  split:true,
  valueSuffix: ' people' 
},

credits:{
  enabled:false
},

series: [
  {
     name:"Number of employees",
     data: [8, 15, 20, 25]
  }]


};
  
    HC_exporting(Highcharts);

    setTimeout (() => {
      window.dispatchEvent(
        new Event ('resize')
      );
    },300);


  }

}

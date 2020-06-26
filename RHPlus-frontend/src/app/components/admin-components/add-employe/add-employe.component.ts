import { Component, OnInit } from '@angular/core';
import {  EmployeService } from '../../../services/employe.service';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadfileService } from '../../../services/uploadfile.service';
import { Employe } from 'src/app/modals/employe';

@Component({

  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  
  //user: employe = new employe();
  title = 'File-Upload-Save';
  
  

  public fileImage : File;
  user: Employe = new Employe();


  constructor(private employeService:EmployeService,private uploadService: UploadfileService ) {}

  
 
  ngOnInit() {}

  downloadFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '_File_Saved_Path');
    link.setAttribute('download', 'file_name.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
    }

    selectFileImage(event){
      this.fileImage = event.target.files[0];
    }

    createEmploye():void {
      this.employeService.createEmploye(this.user,this.fileImage)
        .subscribe(  data => {
          alert("candidate created successfully");
        } );
      };

      
   
    

    


 }


 



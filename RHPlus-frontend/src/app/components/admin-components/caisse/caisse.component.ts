import { Component, OnInit } from '@angular/core';
import { Caisse } from 'src/app/modals/caisse';
import { CaisseService } from 'src/app/services/caisse.service';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { User } from 'src/app/modals/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.css']
})
export class CaisseComponent implements OnInit {

  public caisse: Caisse = new Caisse;
  public caisses: Caisse[];
  public id:any;
  user1:User = new User();
  constructor(private caisseService: CaisseService,private userService:UserService,
    private tokenStorageService: TokenStorageService,private router: Router) { }
  
  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.id = user.id;
    this.getUser();
    this.getExpenses();
    this.getCaisse();
    
  }


  getUser() {
   
    this.userService.getUser(this.id).subscribe(
      response => {
        this.user1= response ;
     }
    );
  }

 

  getCaisse() {
   
    this.caisseService.getCaisse(this.id).subscribe(
      response => {
        this.caisse= response ;
     }
    );
  }

  onAddDepense():void{
    this.caisseService.createCaisse(this.caisse,this.id)
    .subscribe(  data => {
      this.caisses.push(data);
      
      this.userService.toastMessage("Expense is added successfully")
    } ,(error) => {
      this.userService.toastMessage("failed action")
  }
    );
   

  }

 



  getExpenses(){
    this.caisseService.getExpenses().subscribe(
      response => {
        this.caisses = response; }
     );
  }

  deleteExpense(caisse){
    this.caisseService.deleteExpenseById(caisse.idCaisse)
      .subscribe( data => {
        this.caisses = this.caisses.filter(u => u !== caisse);
      })
    
  }


}

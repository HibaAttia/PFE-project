import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caisse } from '../modals/caisse';

@Injectable({
  providedIn: 'root'
})
export class CaisseService {

  
  constructor(private httpClient:HttpClient) { }

  public getExpenses(){
    return this.httpClient.get<any>("http://localhost:8080/caisses");
  }

  public getCaisse(id:number){
    return this.httpClient.get<any>("http://localhost:8080/budget/"+id);
  }

  public createExpense(caisse:Caisse){
    return this.httpClient.post<any>("http://localhost:8080/createCaisse",caisse);
  }

  public createCaisse(caisse:Caisse, id:number){
    return this.httpClient.post<Caisse>("http://localhost:8080/createCaisse?id="+id,caisse);

  }

  public deleteExpenseById (id: number)  {
    return this.httpClient.delete("http://localhost:8080/deleteCaisse"+"/" + id);
  }


}

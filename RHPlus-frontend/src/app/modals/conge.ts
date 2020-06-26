
import { User } from './user';

export class Conge {
      idCong:number;
	  typeCong:String;
	  debutCong:Date;
	  finCong:Date;
	  createdAt:Date;
	  description:String;
	  duree: String; 
	  soldeConge: number;
	  statusOfDemand: boolean;
	  idUser:number;
	  user: User;
}
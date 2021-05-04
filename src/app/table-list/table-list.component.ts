import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/classes/utilisateur';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  user:Utilisateur;
  users:Utilisateur[];
  b=false;
  constructor(private userService:UserService) { }
  
  ngOnInit(): void {
    this.user=new Utilisateur();
    this.read();
  }
  adduser()
  {
 let us=Object.assign({},this.user);
 this.userService.create_NewUser(us);
 alert("ajouté avec succés!");
this.user=new Utilisateur(); 
 
  }
  read()
  {
    this.userService.read_Users().subscribe(data => {
  
      this.users = data.map(e => {
        return {
         id: e.payload.doc.id,
  
         nom: e.payload.doc.data()["nom"],
         tel: e.payload.doc.data()["tel"],
         grade: e.payload.doc.data()["grade"],
         login: e.payload.doc.data()["login"],
         mdp: e.payload.doc.data()["mdp"],
         adresse: e.payload.doc.data()["adresse"],
  
  
  
        };
      });
      console.log(this.users);
  
    });
  
  
  }
  supprimer(id)
{
  if(confirm("vous voulez supprimer l'utilisateur?"))
  this.userService.delete_User(id);
}
}

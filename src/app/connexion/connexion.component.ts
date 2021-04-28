import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { Utilisateur } from '../classes/utilisateur';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
user:Utilisateur;
users:Utilisateur[];
b=false;
constructor(private userService:UserService) { }

ngOnInit(): void {
  localStorage.clear();
  this.user=new Utilisateur();
  this.read();
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
verif()
{
for(let us of this.users)
{
if((us.login==this.user.login)&&(us.mdp==this.user.mdp))
{
  localStorage.setItem("id",us.id);
  localStorage.setItem("grade",us.grade);
window.location.replace("/#/accueil");
this.b=true;


}

}
if(!this.b)
alert("compte non reconnu!");


}

}

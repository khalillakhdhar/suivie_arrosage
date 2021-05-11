import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/classes/utilisateur';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:Utilisateur;
  users:Utilisateur[];
  nbs=0;
  nbu=0;
  nbo=0;
  constructor(private userService:UserService) { }

  ngOnInit() {
      this.read();
      this.calculate();
  }
  calculate()
  {
    for (let us of this.users)
    {
      this.nbu++;
      if(us.grade=="admin")
      this.nbs++;
    }
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
      for (let us of this.users)
      {
        this.nbu++;
        if(us.grade=="admin")
        this.nbs++;
      }
      console.log(this.users);
  
    });
  
  
  }
}

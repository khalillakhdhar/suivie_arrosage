import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/classes/utilisateur';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:Utilisateur;
  users:Utilisateur[];
  constructor() { }

  ngOnInit() {
      
  }

}

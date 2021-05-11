import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'app/classes/reclamation';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
reclamation:Reclamation;
reclamations:Reclamation[];
  constructor() { }

  ngOnInit() {
    this.reclamation=new Reclamation();
  }

}

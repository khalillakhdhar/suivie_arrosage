import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'app/classes/reclamation';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
reclamation:Reclamation;
reclamations:Reclamation[];
  constructor(private api:ReclamationService) { }

  ngOnInit() {
    this.reclamation=new Reclamation();
    this.reclamation.type="selectionner";
  }
add()
{
  let rec=Object.assign({},this.reclamation);
  this.api.create_NewReclamation(rec);
  this.reclamation=new Reclamation();
alert("reclamé à l'administration");
}
read()
{

}
}

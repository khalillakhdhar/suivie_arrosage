import { Component, OnInit } from '@angular/core';
import { Parametres } from 'app/classes/parametres';
import { Parameterservice } from '../services/parametres.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
parametre:Parametres;
parametres:Parametres[];
  constructor(private parametresService:Parameterservice) { 

  }

  ngOnInit() {
  this.parametre=new Parametres();
  this.parametre.mode="selectionner";
  this.read();
  }
  read()
  {
    this.parametresService.read_Parameters().subscribe(data => {
  
      this.parametres = data.map(e => {
        return {
         id: e.payload.doc.id,
  
         mode: e.payload.doc.data()["mode"],
         debut: e.payload.doc.data()["debut"],
         duree: e.payload.doc.data()["duree"],
         repetition: e.payload.doc.data()["repetition"],
        
  
  
  
        };
      });
      console.log("paramétres",this.parametres);
  
    });
  
  
  }
  supprimer(id)
{
  if(confirm("vous voulez supprimer cette configuration?"))
  this.parametresService.delete_Parameters(id);
}
add()
{
  let pr =Object.assign({},this.parametre);
  this.parametresService.create_NewParameters(pr);
  this.parametre=new Parametres();

}
}

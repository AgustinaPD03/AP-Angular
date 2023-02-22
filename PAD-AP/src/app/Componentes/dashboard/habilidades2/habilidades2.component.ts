import { Component } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-habilidades2',
  templateUrl: './habilidades2.component.html',
  styleUrls: ['./habilidades2.component.css']
})
export class Habilidades2Component {
  habilidadesHList:any;
  habilidadesSList: any;

  constructor(private habilidadesH:DataService, private habilidadesS:DataService) { }

  ngOnInit(): void {
    this.habilidadesH.obtenerDatos().subscribe(data=>{
      this.habilidadesHList=data.habilidadesH
    }),
    this.habilidadesS.obtenerDatos().subscribe(data=>{
      this.habilidadesSList=data.habilidadesS
    })
  }
}

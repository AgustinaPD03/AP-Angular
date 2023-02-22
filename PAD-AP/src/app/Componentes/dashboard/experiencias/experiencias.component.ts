import { Component } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {
  experienciaList:any;
  experiencia: any;

  constructor(private experiencias:DataService) { }

  ngOnInit(): void {
    this.experiencias.obtenerDatos().subscribe(data=>{
      console.log("Esto funciona?");
      this.experienciaList=data.experiencias
    })
  }
}

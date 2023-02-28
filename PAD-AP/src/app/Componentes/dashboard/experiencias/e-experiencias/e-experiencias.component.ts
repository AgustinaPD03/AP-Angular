import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-e-experiencias',
  templateUrl: './e-experiencias.component.html',
  styleUrls: ['./e-experiencias.component.css']
})
export class EExperienciasComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      name:['',[Validators.required]],
      puesto:['',[Validators.required]]
    })
  }
  ngOnInit(): void {}

  get Name(){
    return this.form.get("name");
  }
  get Puesto(){
    return this.form.get("puesto");
  }

  get NameValid(){
    return this.Name?.touched && !this.Name?.valid;
  }
  get PuestoValid() {
    return false
  }
  
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 

    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Iniciando sesión!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }

  }
}

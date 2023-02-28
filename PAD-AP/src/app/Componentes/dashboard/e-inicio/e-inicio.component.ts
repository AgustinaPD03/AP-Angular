import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-e-inicio',
  templateUrl: './e-inicio.component.html',
  styleUrls: ['./e-inicio.component.css']
})
export class EInicioComponent implements OnInit{
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form= this.formBuilder.group({
      name:['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      red:['', [Validators.pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)]]
    })
  }
  ngOnInit() {}
  get Name(){
    return this.form.get("name");
  }
  
  get Red(){
    return this.form.get("red");
  }

  get NameValid(){
    return this.Name?.touched && !this.Name?.valid;
  }

  get RedValid() {
    return false
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault(); 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Guardando cambios!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }
}

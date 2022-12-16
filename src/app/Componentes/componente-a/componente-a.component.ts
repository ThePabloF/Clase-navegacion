import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '../interfaces/Interfaces';


@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  miformulario: FormGroup=this.fb.group({
 
    nombre:["", Validators.required],
    apellido:["", Validators.required],
    correo:["", Validators.required],
    telefono:["", Validators.required],
    cedula:["", Validators.required]

  });

  persona={
    nombre:"",
    apellido:"",
    correo:"",
    telefono:"",
    cedula:""
  }

    constructor(private router: Router, private fb: FormBuilder) { }
    //Aquí se deben declarar todas las variables
   guardar(){
    
    if(this.miformulario.valid){
      this.persona.nombre= this.miformulario.controls['nombre'].value;
      this.persona.apellido= this.miformulario.controls['apellido'].value;
      this.persona.correo= this.miformulario.controls['correo'].value;
      this.persona.telefono= this.miformulario.controls['telefono'].value;
      this.persona.cedula= this.miformulario.controls['cedula'].value;

      localStorage.setItem('formPersona', JSON.stringify(this.persona))
      this.router.navigateByUrl("/cuarta");
      console.log("GUARDADO CORRECTAMENTE")
    }
 
  }
  validar(campo: string){

return(this.miformulario.controls[campo].errors && this.miformulario.controls[campo].touched )

  }

 irApagina1(){
  this.router.navigate([""])
 }

 irApagina(){
  this.router.navigateByUrl("/segunda");
}
irApagina3(){
  this.router.navigateByUrl("/tercera");
}
irApagina4(){
  this.router.navigateByUrl("/cuarta");
}



  ngOnInit(): void {//primer metodo al iniciar el componente o cargar la pagina
 
  }
  
  

 


}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../interfaces/Interfaces';
@Component({
  selector: 'app-componente-d',
  templateUrl: './componente-d.component.html',
  styleUrls: ['./componente-d.component.css']
})
export class ComponenteDComponent implements OnInit {

personaRecibida?:Persona;

cargarPersonas(){

this.personaRecibida=JSON.parse(localStorage.getItem('formPersona')!) as Persona;


}


  constructor(private router: Router) {

   this.cargarPersonas();
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
  ngOnInit(): void {
  }



}

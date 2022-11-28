import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {
    constructor(private router: Router) { }
    //Aquí se deben declarar todas las variables
    vector: string="";
    suma: number=0;
    suma2:number=0;

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
 this.Suma()
  }
  
  

 Suma(){
  let numero1:number=2;//let variable local de un metodo
  let numero2:number=3;
  var total= this.suma+5;
  
  this.suma=numero1+numero2
  console.log("Suma: ",this.suma)

  this.suma2=this.suma+5;
  console.log("Total: ",this.suma2);
   this.total(this.suma2)//envio el valor de la suma total
 }
 total(sum:number){//recibo el valor de la suma total
  console.log("Multi: ",sum*2);//multiplico el valor de la suma por 2
  

 }
navegar(){
  

}
}


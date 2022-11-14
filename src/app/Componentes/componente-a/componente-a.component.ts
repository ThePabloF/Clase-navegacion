import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  constructor(private router: Router) { }
  

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
    console.log("llego de golpe")
  }
  

}

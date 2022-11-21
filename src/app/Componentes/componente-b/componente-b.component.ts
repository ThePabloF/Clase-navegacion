import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  constructor(private router: Router) { }
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

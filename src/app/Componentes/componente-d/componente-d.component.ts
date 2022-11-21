import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-componente-d',
  templateUrl: './componente-d.component.html',
  styleUrls: ['./componente-d.component.css']
})
export class ComponenteDComponent implements OnInit {
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

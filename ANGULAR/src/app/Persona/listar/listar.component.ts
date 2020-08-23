import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Persona } from 'src/app/Modelo/Persona';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[];
  persona: Persona = new Persona();
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
   this.listar();
  }

  listar(): void {
    this.service.getPersonas(this.persona)
    .subscribe((dataResponse: any) => {
      if (dataResponse && dataResponse.resultado && dataResponse.resultado === 'OK') {

        let array = dataResponse.resultadosList.resultado;
        let contador = 1;
        for (let index = 0; index < array.length; index++) {
          const element = array[index];
          element.enumerar = contador ++;
          
        }
        this.personas = dataResponse.resultadosList.resultado;
      }
      else{
        this.personas = [];
      }
    });
  }

  guardar(): void {
    this.router.navigate(["add"]);
  }

  Editar(persona: Persona): void {
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["edit"]);
  }

  Consultar(persona: Persona): void {
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["search"]);
  }

  Delete(persona: Persona) {
    this.service.deletePersona(persona)
      .subscribe(data => {
        this.listar();
        alert("Usuario eliminado...");
      })
  }

}

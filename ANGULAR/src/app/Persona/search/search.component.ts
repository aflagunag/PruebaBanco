import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  persona: Persona = new Persona();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.persona.id = Number(localStorage.getItem("id"));
    this.service.getPersonaId(this.persona)
      .subscribe((dataResponse: any) => {
        if (dataResponse && dataResponse.resultado && dataResponse.resultado === 'OK') {
          this.persona = dataResponse.objetoResponse;
        }
      })
  }
  
  volver() {
          this.router.navigate([""]);       
  }

}

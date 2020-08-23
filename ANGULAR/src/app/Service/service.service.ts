import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable()
export class ServiceService {


  constructor(private http: HttpClient) { }

  Url = 'http://localhost:3001/api/';

  getPersonas(persona: Persona) {
    return this.http.post(this.Url + 'Personas/listarPersona', persona);
  }
  createPersona(persona: Persona) {
    return this.http.post(this.Url + 'Personas/guardarPersona', persona);
  }
  getPersonaId(persona: Persona) {
    return this.http.post(this.Url + 'Personas/consultarPersona', persona);
  }
  updatePersona(persona: Persona) {
    return this.http.post(this.Url + 'Personas/actualizarPersona', persona);
  }
  deletePersona(persona: Persona) {
    return this.http.post(this.Url + 'Personas/borrarPersona', persona);
  }
}

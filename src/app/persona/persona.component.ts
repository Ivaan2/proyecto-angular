import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{

  private nombre: string = 'Ivan';
  private apellido: string = 'Perez';
  private edad: number = 32;

  getEdad(): number {
    return this.edad;
  }

  getNombre(): string{
    return this.nombre;
  }

  getApellido(): string{
    return this.apellido;
  }
}

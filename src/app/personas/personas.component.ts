import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
    deshabilitar: boolean = false;
    mensaje: string = 'Hola mundo';
    titulo: string= '';

    agregarPersona(){
        this.mensaje = 'Persona agregada'
    };
    /*
    modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement> event.target).value;
    }
    */
}
import { Component, OnInit, HostBinding } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import {PersonasService} from '../../Services/personas.service';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  // @HostBinding('class') classes = 'row';

  persona: Persona ={
    cedula: 0,
    clave: '',
    direccion: '',
    nombre: '',
    telefono: '',
    tipo_rol: 2,
    tipo_usuario: 2,
    usuario: '',
  };

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
  }

  GuardarNuevaPersona(){
    console.log(this.persona)
    this.personasService.savePersona(this.persona).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

}

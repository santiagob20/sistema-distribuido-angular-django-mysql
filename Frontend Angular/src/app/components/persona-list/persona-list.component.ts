import { Component, OnInit } from '@angular/core';

import { PersonasService } from '../../services/personas.service';
import { } from 'src/app/models/Persona';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  personas: any;

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
    this.personasService.getAllPersonas().subscribe(
      res => {
        // console.log(res)
        this.personas = res;
      },
      err => console.log(err)
    )
  }

}

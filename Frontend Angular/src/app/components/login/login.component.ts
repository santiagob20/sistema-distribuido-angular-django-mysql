import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { Persona } from 'src/app/models/Persona';
import { sha256 } from 'js-sha256';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Persona = {
    // usuario:"",
    // clave:""
  };
  dataResponse: any;
  constructor(private personasService: PersonasService, private router: Router) { }

  ngOnInit() {
  }

  makeRandom() {
    let lengthOfCode = 15;
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  authUser() {
    let context = this;
    if (this.user.usuario == null || this.user.clave == null) {
      alert("Por favor escriba un usuario y una clave")
    } else {
      context.user.clave = sha256(this.user.clave);
      context.personasService.authPersona(this.user).subscribe(
        res => {
          context.user = {};
          context.dataResponse = res;
          // response = JSON.parse(response);
          // console.log(context.dataResponse)
          if (context.dataResponse.code === 1) {
            localStorage.setItem("userdata", JSON.stringify(context.dataResponse.data_user))
            localStorage.setItem("session", this.makeRandom())
            // alert("User logged in")
            this.router.navigate(['/home'])
          } else {
            alert("El usuario o clave son incorrectos")
            // alert("Oopss, algo ha salido mal, intenta mas tarde111")
          }
        },
        err => alert("Oopss, algo ha salido mal, intenta mas tarde" + err)
      )

    }
    console.log(context.dataResponse)
  }

}

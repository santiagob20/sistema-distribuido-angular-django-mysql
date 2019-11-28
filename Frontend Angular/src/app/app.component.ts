import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  user:any;
  constructor(private router: Router) { }

  ngOnInit(){

    if (!localStorage.getItem("session")) {
      localStorage.removeItem("userdata")
      this.router.navigate(['/login'])
    } else {
      this.user = JSON.parse(localStorage.getItem("userdata"))
      this.router.navigate(['/home'])
      // console.log(this.user)
    }

  }

}

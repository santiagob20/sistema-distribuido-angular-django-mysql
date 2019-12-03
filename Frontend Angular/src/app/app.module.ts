import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';

import {PersonasService} from './services/personas.service';
import { PersonaFormComponent } from './components/persona-form/persona-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonaListComponent,
    PersonaFormComponent,
    HomeComponent,
    LoginComponent,
    ProductoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule.forRoot(),
    NgbModule
  ],
  providers: [
    PersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

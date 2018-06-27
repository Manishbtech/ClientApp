import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './User/Registration/registration.component'
import { HomeComponent } from './Home/home.component'
import { LoginComponent } from './User/Login/login.component'
import { Route, RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, RegistrationComponent, HomeComponent, LoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsUtilisationComponent } from './conditions-utilisation/conditions-utilisation.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConditionsUtilisationComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'conditionsUtilisation',component:ConditionsUtilisationComponent},
      
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

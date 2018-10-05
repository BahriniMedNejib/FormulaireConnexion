import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utilisateur:any;

  constructor(private router : Router) { }

  login(utilisateur){
    this.utilisateur={
      "email":utilisateur.email,
      "mdp":utilisateur.mdp
    }
    localStorage.setItem("user",JSON.stringify(this.utilisateur));
    this.router.navigate(['/conditionsUtilisation'])

  }

  ngOnInit() {
  }

}

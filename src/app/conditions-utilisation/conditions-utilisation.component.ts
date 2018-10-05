import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conditions-utilisation',
  templateUrl: './conditions-utilisation.component.html',
  styleUrls: ['./conditions-utilisation.component.css']
})
export class ConditionsUtilisationComponent implements OnInit {
  infosUtilisateur:any;

  constructor(private router : Router) { }
  retour() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
  validation(){
    alert("Félicitation "+this.infosUtilisateur.email+" vous vous êtes inscrit  avec succès");
  }

  ngOnInit() {
    this.infosUtilisateur=JSON.parse(localStorage.getItem("user"));
  }

}

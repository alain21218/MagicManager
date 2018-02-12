import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../components/alert-queue/service/alert.service';
import { ResoucesService } from '../../services/resources/resouces.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private alert:AlertService, private resources:ResoucesService) { }

  ngOnInit() {
  }

  public register($event:Event){
    $event.preventDefault();
    
    let user = new User();
    user.email = "alain21218@gmail.com";
    user.id = 0;
    user.pass="mdp";

    this.resources.addUsers(user).subscribe(
      res => (
        console.log(res), 
        this.alert.success("Bienvenue","Leix"))
    ), error => (
        console.log(error), 
        this.alert.error("Erreur","")
    )
  }
}

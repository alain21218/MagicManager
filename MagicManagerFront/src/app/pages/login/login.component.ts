import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../components/alert-queue/service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private alert:AlertService) { }

  ngOnInit() {
  }

  public connect($event:Event){
    $event.preventDefault();
    this.alert.success("Bonjour","Leix");
  }
}

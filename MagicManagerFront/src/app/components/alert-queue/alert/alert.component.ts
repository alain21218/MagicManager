import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Alert } from '../model/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input("model") model:Alert;

  constructor() { }

  ngOnInit() {
    this.model = this.model || new Alert();
    this.hide();
  }
  
  hide(){
    Observable.interval(this.model.delay)
    .subscribe(i => { 
      this.model.disapear = true;

      Observable.interval(500) //animation time
      .subscribe(i => { 
        this.model.visible = false;
      })  
    })
  }
}
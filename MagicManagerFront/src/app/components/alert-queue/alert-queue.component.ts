import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Alert } from './model/alert';
import { AlertService } from './service/alert.service';

@Component({
  selector: 'app-alert-queue',
  templateUrl: './alert-queue.component.html',
  styleUrls: ['./alert-queue.component.css'],
  providers: []
})
export class AlertQueueComponent implements OnInit {

  public alerts:Array<Alert>;

  constructor(private alertService:AlertService) { }

  ngOnInit() {
    this.alerts = this.alertService.Alerts;
  }

  public getAnimationClass(alert){
    return alert.disapear ? 'fadeout':'fadein';
  }

}

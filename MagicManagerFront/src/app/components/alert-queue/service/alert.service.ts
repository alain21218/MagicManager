import { Injectable } from '@angular/core';
import { Alert } from '../model/alert';

@Injectable()
export class AlertService {

  private alerts:Array<Alert>;
  private MAX_ALERT_STORED = 30;
  private NUM_ALERT_SAVED = 5;

  constructor() {
    this.alerts = new Array<Alert>();
  }

  public clearArray(){
    if(this.alerts.length >= this.MAX_ALERT_STORED){
      this.alerts.splice(this.NUM_ALERT_SAVED, this.alerts.length-this.NUM_ALERT_SAVED);
    }
  }

  public create(title, body, style = undefined, delay = undefined){
    let alert = new Alert(title, body, style, delay);
    this.alerts.unshift(alert);
    this.clearArray();
  }

  public success(title, body){
    this.create(title, body, "success");
  }

  public error(title, body){
    this.create(title, body, "danger");
  }

  public info(title, body){
    this.create(title, body, "info");
  }

  public warning(title, body){
    this.create(title, body, "warning");
  }

  public get Alerts(){
    return this.alerts;
  }

}

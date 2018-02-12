import { Component } from '@angular/core';
import { User } from './models/user';
import 'rxjs/Rx';
import { AlertQueueComponent } from './components/alert-queue/alert-queue.component';
import { AlertService } from './components/alert-queue/service/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    AlertService
  ]
})
export class AppComponent {
  constructor(){
  }

  ngOnInit(){
    
  }
}

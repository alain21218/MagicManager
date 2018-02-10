import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './models/user';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
  me:number;

  constructor(private http:HttpClient){
    this.user= new User();

    // let params = new HttpParams();
    // params.set('name', '1');

    this.http.get<User>('/api/users/1')
    .subscribe(user => this.user = user)

    this.http.get<number>('/api/users/test/1')
    .subscribe(name => this.me = name)
  }
}

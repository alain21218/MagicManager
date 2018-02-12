import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable()
export class ResoucesService {

  constructor(private http:HttpClient) { }

  public addUsers(user:User){
    return this.http.post<User>('/api/users/add', user);
  }

}

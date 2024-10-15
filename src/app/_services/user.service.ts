import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDataUser, ISingleUser } from '../_interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url= 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IDataUser>{
    return this.http.get<IDataUser>(this.url)
  }

  getUser(id: string | null){
    return this.http.get<ISingleUser>(this.url+'/'+id)
  }

  addUser(){}

  updateUser(){}

  deleteUser(){}
}

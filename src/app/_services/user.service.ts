import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDataUser, IUser } from '../_interfaces/user';
import { Observable } from 'rxjs';
import { IApi } from '../_interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url= 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IDataUser>{
    return this.http.get<IDataUser>(this.url)
  }

  getUser(id: string | null): Observable<IUser>{
    return this.http.get<IUser>(this.url+'/'+id)
  }

  addUser(user: IUser): Observable<IApi>{
    return this.http.put<IApi>(this.url+'/add', user)
  }

  updateUser(user: IUser): Observable<IApi>{
    return this.http.put<IApi>(this.url+'/'+user._id, user)
  }

  deleteUser(id: string | null): Observable<IApi>{
    return this.http.delete<IApi>(this.url+'/'+id)
}
}

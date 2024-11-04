import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICredential } from '../_interfaces/credential';
import { IToken } from '../_interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://capitainerie.onrender.com/users/authenticate' 

  constructor(private http: HttpClient) { }

  authenticate(credentials: ICredential){
    return this.http.post<IToken>(this.url, credentials)
  }
}

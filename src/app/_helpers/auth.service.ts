import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() { }

  login(form: any) {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}

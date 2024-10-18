import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { ICredential } from '../../_interfaces/credential';
import { TokenService } from '../../_services/token.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 
  form: ICredential  = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.authService.authenticate(this.form).subscribe(
       data => {
        console.log(data.access_token)
        this.tokenService.saveToken(data.access_token)
       },
       err => console.log(err)
  )
  }

}

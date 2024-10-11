import { Component } from '@angular/core';
import { TokenService } from '../../_services/token.service';

@Component({
  selector: 'app-aheader',
  standalone: true,
  imports: [],
  templateUrl: './aheader.component.html',
  styleUrl: './aheader.component.css'
})
export class AheaderComponent {

  constructor(private tokenService: TokenService) { }

  logout(): void{
    this.tokenService.clearToken()
  }

}

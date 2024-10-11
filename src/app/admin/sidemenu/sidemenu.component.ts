import { Component } from '@angular/core';
import { AheaderComponent } from '../aheader/aheader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [RouterLink, AheaderComponent, SidemenuComponent],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

}

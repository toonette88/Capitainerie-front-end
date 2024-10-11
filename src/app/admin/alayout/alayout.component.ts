import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AheaderComponent } from "../aheader/aheader.component";
import { SidemenuComponent } from "../sidemenu/sidemenu.component";

@Component({
  selector: 'app-alayout',
  standalone: true,
  imports: [RouterOutlet, AheaderComponent, SidemenuComponent],
  templateUrl: './alayout.component.html',
  styleUrl: './alayout.component.css'
})
export class AlayoutComponent {

}

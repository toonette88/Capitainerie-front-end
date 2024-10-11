import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PheaderComponent } from '../pheader/pheader.component';

@Component({
  selector: 'app-playout',
  standalone: true,
  imports: [RouterOutlet, PheaderComponent],
  templateUrl: './playout.component.html',
  styleUrl: './playout.component.css'
})
export class PlayoutComponent {

}

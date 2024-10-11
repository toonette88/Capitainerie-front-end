import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-r-edit',
  standalone: true,
  imports: [],
  templateUrl: './r-edit.component.html',
  styleUrl: './r-edit.component.css'
})
export class REditComponent {
  constructor(private activated : ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => console.log(data)
    )
  }
}

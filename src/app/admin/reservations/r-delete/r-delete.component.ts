import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-r-delete',
  standalone: true,
  imports: [],
  templateUrl: './r-delete.component.html',
  styleUrl: './r-delete.component.css'
})
export class RDeleteComponent {
  constructor(private activated : ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => console.log(data)
    )
  }
}

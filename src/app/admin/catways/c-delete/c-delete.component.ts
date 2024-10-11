import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-delete',
  standalone: true,
  imports: [],
  templateUrl: './c-delete.component.html',
  styleUrl: './c-delete.component.css'
})
export class CDeleteComponent {
  constructor(private activated : ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => console.log(data)
    )
  }
}

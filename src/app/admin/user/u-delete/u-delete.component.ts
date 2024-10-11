import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-delete',
  standalone: true,
  imports: [],
  templateUrl: './u-delete.component.html',
  styleUrl: './u-delete.component.css'
})
export class UDeleteComponent {
  constructor(private activated : ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => console.log(data)
    )
  }
}

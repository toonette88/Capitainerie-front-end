import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-edit',
  standalone: true,
  imports: [],
  templateUrl: './u-edit.component.html',
  styleUrl: './u-edit.component.css'
})
export class UEditComponent {
  constructor(private activated : ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => console.log(data)
    )
  }
}

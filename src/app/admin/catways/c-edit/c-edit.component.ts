import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-edit',
  standalone: true,
  imports: [],
  templateUrl: './c-edit.component.html',
  styleUrl: './c-edit.component.css'
})
export class CEditComponent {
  constructor(private activated : ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => console.log(data)
    )
  }
}

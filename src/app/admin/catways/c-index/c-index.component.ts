import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-c-index',
  standalone: true,
  imports: [],
  templateUrl: './c-index.component.html',
  styleUrl: './c-index.component.css'
})
export class CIndexComponent {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/catways/').subscribe(
      data => console.log(data),
      err => console.error(err)
    )
  }

}

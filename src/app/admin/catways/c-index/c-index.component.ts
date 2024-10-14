import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatwayService } from '../../../_services/catway.service';

@Component({
  selector: 'app-c-index',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './c-index.component.html',
  styleUrl: './c-index.component.css'
})
export class CIndexComponent {

  catwaysList: any[] = []
  constructor(private catwayService: CatwayService) { }

  ngOnInit(): void {
    this.catwayService.getAllCatways().subscribe(
      catways => {
        console.log(catways),
        this.catwaysList = catways.data
      })
  }

}

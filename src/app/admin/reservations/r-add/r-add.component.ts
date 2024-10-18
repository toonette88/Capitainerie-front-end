import { Component } from '@angular/core';
import { ICatway } from '../../../_interfaces/catway';
import { CatwayService } from '../../../_services/catway.service';
import { NgFor } from '@angular/common';
import { concat } from 'rxjs';

@Component({
  selector: 'app-r-add',
  standalone: true,
  imports: [NgFor],
  templateUrl: './r-add.component.html',
  styleUrl: './r-add.component.css'
})
export class RAddComponent {

  catwayNumberList: number[] = []

  constructor( 
    private catwayService: CatwayService,
  ) {}


  ngOnInit() : void {
    this.catwayService.getAllCatwaysNumber().subscribe(
      catways => {
        console.log(catways)
        this.catwayNumberList
      })
    }  
    
    ngOptions = this.catwayNumberList  

}

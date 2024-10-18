import { Component } from '@angular/core';
import { ICatway } from '../../../_interfaces/catway';
import { CatwayService } from '../../../_services/catway.service';

@Component({
  selector: 'app-c-add',
  standalone: true,
  imports: [],
  templateUrl: './c-add.component.html',
  styleUrl: './c-add.component.css'
})
export class CAddComponent {

  catway: ICatway = {
    catwayNumber: '',
    type: '',
    catwayState: '',
  }

  constructor( private catwayService: CatwayService){}

  onSubmit(){
    this.catwayService.addCatway(this.catway).subscribe(
      data => console.log(data.message)
    )
  }
}

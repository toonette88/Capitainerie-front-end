import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatwayService } from '../../../_services/catway.service';
import { ICatway } from '../../../_interfaces/catway';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-c-edit',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './c-edit.component.html',
  styleUrl: './c-edit.component.css'
})
export class CEditComponent {
  
  catway: ICatway = {
    catwayNumber: '',
    catwayState: '',
    type: '',
    _id: '',
  }
    
  constructor(
    private activated : ActivatedRoute,
    private catwayService: CatwayService
  ) { }

  ngOnInit(): void {
    let id= this.activated.snapshot.paramMap.get('id')
    console.log(id)
    this.catwayService.getCatway(id).subscribe(
      data => {
        this.catway = data
    })
  }

  onSubmit(): void{
    this.catwayService.updateCatway(this.catway).subscribe(
      data => console.log(data.message)
    )
    
  }
}

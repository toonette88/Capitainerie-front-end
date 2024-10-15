import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CatwayService } from '../../../_services/catway.service';
import { ICatway } from '../../../_interfaces/catway';

@Component({
  selector: 'app-c-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './c-edit.component.html',
  styleUrl: './c-edit.component.css'
})
export class CEditComponent {
  catway: ICatway = {
    catwayNumber: 0,
    catwayState: '',
    type: ''
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
        console.log(data)
        this.catway = data.data
    })
  }

  onSubmit(): void{
    console.log(this.catway)
  }
}

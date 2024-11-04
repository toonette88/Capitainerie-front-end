import { Component } from '@angular/core';
import { CatwayService } from '../../../_services/catway.service';
import { CommonModule, NgFor } from '@angular/common';
import { __values } from 'tslib';
import { ICatway } from '../../../_interfaces/catway';
import { IReservation } from '../../../_interfaces/reservation';
import { ReservationService } from '../../../_services/reservation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-r-add',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './r-add.component.html',
  styleUrl: './r-add.component.css'
})
export class RAddComponent {

  catwaysList: ICatway[] = []
  reservation: IReservation ={
    catwayNumber: '',
    clientName: '', 
    boatName:'' , 
  }
  
  constructor(
    private catwayService: CatwayService,
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.catwayService.getAllCatways().subscribe(
      catways => {
        console.log(catways),
        this.catwaysList = catways.data
      })
  }

  onSubmit() {
    this.reservationService.addReservation(this.reservation).subscribe(
      data => console.log(data)
    )
  }
 
    
}

import { Component } from '@angular/core';
import { IReservation } from '../../../_interfaces/reservation';
import { ReservationService } from '../../../_services/reservation.service';
import {DatePipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-r-index',
  standalone: true,
  imports: [NgFor, RouterLink, DatePipe],
  templateUrl: './r-index.component.html',
  styleUrl: './r-index.component.css'
})
export class RIndexComponent {

  reservationsList: IReservation[] = []

  constructor( private reservationService : ReservationService ){}

  ngOnInit(): void {
    this.reservationService.getAllReservations().subscribe(
      reservations => {
        this.reservationsList = reservations.data
      }
    )
  }

  close(id: string | undefined){
    console.log(id)
    this.reservationService.closeReservation(id).subscribe(
      data => {
        console.log(data)
        this.ngOnInit()
  })
  }
}

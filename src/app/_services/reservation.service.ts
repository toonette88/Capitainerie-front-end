import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataReservation, IReservation } from '../_interfaces/reservation';
import { IApi } from '../_interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url = 'http://localhost:3000/reservations'

  constructor(private http : HttpClient) {  }

  getAllReservations(): Observable<IDataReservation>{
    return this.http.get<IDataReservation>(this.url)
  }

  getReservation(id: string  | null): Observable<IReservation>{
    return this.http.get<IReservation>(this.url+'/'+id)
  }

  addReservation(reservation: IReservation): Observable<IApi>{
    return this.http.put<IApi>(this.url, reservation)
  }

  closeReservation(id: string |undefined): Observable<IApi>{
    return this.http.delete<IApi>(this.url+'/'+id)
  }
}
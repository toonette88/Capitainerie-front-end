import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataReservation, IReservation } from '../_interfaces/reservation';
import { IApi } from '../_interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url = 'https://capitainerie.onrender.com//reservations'

  constructor(private http : HttpClient) {  }

  getAllReservations(): Observable<IDataReservation>{
    return this.http.get<IDataReservation>(this.url)
  }

  getReservation(id: string  | null): Observable<IReservation>{
    return this.http.get<IReservation>(this.url+'/'+id)
  }

  addReservation(reservation: IReservation): Observable<IApi>{
    return this.http.post<IApi>(this.url+'/add', reservation)
  }

  deleteReservation(id: string | undefined ): Observable<IApi>{
    return this.http.delete<IApi>(this.url+'/'+id)
  }
}
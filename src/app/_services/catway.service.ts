import { Injectable } from '@angular/core';
import { IDataCatway, ISingleCatway } from '../_interfaces/catway';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatwayService {
  url = 'http://localhost:3000/catways' 


  constructor(private http: HttpClient) { }

  getAllCatways(): Observable<IDataCatway>{
    return this.http.get<IDataCatway>(this.url)
  }

  getCatway(id: string | null): Observable<ISingleCatway>{
    return this.http.get<ISingleCatway>(this.url+'/'+id)
  }
}

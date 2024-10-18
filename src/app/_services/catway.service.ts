import { Injectable } from '@angular/core';
import { ICatway, IDataCatway } from '../_interfaces/catway';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApi } from '../_interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class CatwayService {
  
  url = 'http://localhost:3000/catways'
  catwayNumberList=[]


  constructor(private http: HttpClient) { }

  getAllCatways(): Observable<IDataCatway>{
    return this.http.get<IDataCatway>(this.url)
  }

  getAllCatwaysNumber() {
    return this.http.get(this.url+'/catwayNumberList')
  }

  getCatway(id: string | null): Observable<ICatway>{
    return this.http.get<ICatway>(this.url+'/'+id)
  }

  addCatway(catway: ICatway): Observable<IApi>{
    return this.http.put<IApi>(this.url, catway)
  }

  updateCatway(catway: ICatway): Observable<IApi>{
    return this.http.put<IApi>(this.url+'/'+catway._id, catway)
  }

  deleteCatway(id: string | null): Observable<IApi>{
    return this.http.delete<IApi>(this.url+'/'+id)
  }

 

}

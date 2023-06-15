import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guest } from '../models/guest';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GuestServiceService {
baseurl: string ='https://localhost:7108'

  constructor(private http:HttpClient) { }

  getAllGuest():Observable<Guest[]>{
    return this.http.get<Guest[]>(this.baseurl+'/api/guest');

  }
  addGuest(addGuestRequest: Guest):Observable<Guest>{
    addGuestRequest.id = '00000000-0000-0000-0000-000000000000';
      return this.http.post<Guest>(this.baseurl+'/api/guest',addGuestRequest)
    }
  getGuest(id:string):Observable<Guest>{
   return this.http.get<Guest>(this.baseurl+'/api/guest/'+id)
  }

  updateGuest(id:string,updateGuestRequest:Guest):Observable<Guest>{
    return this.http.put<Guest>(this.baseurl+'/api/guest/'+id,updateGuestRequest)
  }
  deleteGuest(id:string): Observable<Guest>{
    return this.http.delete<Guest>(this.baseurl+'/api/guest/'+id)
  }
}

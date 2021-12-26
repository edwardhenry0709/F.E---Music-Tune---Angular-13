import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseCreateAndUpdateSong, Response, ResponeArtists, ResponseListSong, CreateSong } from 'src/app/models/admin.model';
import { url } from 'src/app/config/config.confif';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http:HttpClient
  ) { }

  createSongs(body:CreateSong):Observable<Response>{
    return this.http.post<Response>(url.url+url.custom.data.api.api+url.custom.data.data.data,body);
  }

  deleteSong(id:string):Observable<Response>{
    return this.http.delete<Response>(url.url+url.custom.data.api.api+url.custom.data.data.data+"/"+id)
  }

  updateSong(id:string,body:object):Observable<Response>{
    return this.http.put<Response>(url.url+url.custom.data.api.api+url.custom.data.data.data+"/"+id,body)
  }
  getListSong():Observable<ResponseListSong>{
    return this.http.get<ResponseListSong>(url.url+url.custom.data.api.api+url.custom.data.data.data)
  }
  getDetailSong(id:string):Observable<ResponseListSong>{
    return this.http.get<ResponseListSong>(url.url+url.custom.data.api.api+url.custom.data.data.data+"/"+id)
  }
  getArtist():Observable<ResponeArtists>{
    return this.http.get<ResponeArtists>(url.url+url.custom.data.api.api+url.custom.data.data.artist)
  }
  getDetailsArtist(id:string):Observable<ResponeArtists>{
    return this.http.get<ResponeArtists>(url.url+url.custom.data.api.api+url.custom.data.data.artist+'/'+id)
  }
  deleteArtist(id:string):Observable<Response>{
    return this.http.delete<Response>(url.url+url.custom.data.api.api+url.custom.data.data.artist+'/'+id)
  }
  updateArtist(id:string,body:object):Observable<Response>{
    return this.http.put<Response>(url.url+url.custom.data.api.api+url.custom.data.data.artist+'/'+id,body)
  }
  addArtist(body:object):Observable<ResponeArtists>{
    return this.http.post<ResponeArtists>(url.url+url.custom.data.api.api+url.custom.data.data.artist,body)
  }
}

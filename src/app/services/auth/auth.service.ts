import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from 'src/app/config/config.confif';
import { ResponseLoginAndRegister } from 'src/app/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }
  login(body:object):Observable<ResponseLoginAndRegister>{
    return this.http.post<ResponseLoginAndRegister>(url.url+url.custom.auth.login,body);
  }

  register(body:object):Observable<ResponseLoginAndRegister>{
    return this.http.post<ResponseLoginAndRegister>(url.url+url.custom.auth.registration,body);
  }
}

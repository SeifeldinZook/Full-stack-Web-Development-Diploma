import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  basrURL = 'https://routeegypt.herokuapp.com/'
  constructor(private _HttpClient:HttpClient) { }

  signUp (data):Observable<any> {
    return this._HttpClient.post(this.basrURL + 'signup', data)
  }
  
  signIn (data):Observable<any> {
    return this._HttpClient.post(this.basrURL + 'signin', data)
  }

  signOut (data):Observable<any> {
    return this._HttpClient.post(this.basrURL + 'signout', data)
  }

  isLoggedIn () {
    return !!localStorage.getItem('NotesToken'); // returns boolen => true if there is a token
  }
}

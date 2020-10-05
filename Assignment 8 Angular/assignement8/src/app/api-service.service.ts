 import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(public _HttpClient:HttpClient) {
  }

  getMovies ():Observable<any> {
    return this._HttpClient.get
    ('https://api.themoviedb.org/3/movie/popular?api_key=2bb1113a72b7c7a17d46937ab3286c29');
  };

  getTv ():Observable<any> {
    return this._HttpClient.get
    ('https://api.themoviedb.org/3/tv/top_rated?api_key=2bb1113a72b7c7a17d46937ab3286c29');
  };

  getPeople ():Observable<any> {
    return this._HttpClient.get
    ('https://api.themoviedb.org/3/person/popular?api_key=2bb1113a72b7c7a17d46937ab3286c29');
  };
}

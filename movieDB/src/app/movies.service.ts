import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  constructor(private _HttpClient:HttpClient) {}

  getTrending(mediaType, page):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=2bb1113a72b7c7a17d46937ab3286c29&page=${page}`)
  };

  getItemDetails(mediaType, id){
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=2bb1113a72b7c7a17d46937ab3286c29`)
  };
};

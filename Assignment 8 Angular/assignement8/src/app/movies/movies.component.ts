import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  imgPrefixMovie = 'https://image.tmdb.org/t/p/w500';
  movies:any[];

  constructor(_ApiServiceService:ApiServiceService) {
    _ApiServiceService.getMovies().subscribe((data)=>{    //data is not a syntax
      this.movies = data.results
    })
  }

  ngOnInit(): void {
  }

}

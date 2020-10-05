import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  moviesTrending:any[];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTrending('movies','1').subscribe((data)=>{
      data.results.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });

      this.moviesTrending = data.results;
    });
  }
  ngOnInit(): void {
  };
};

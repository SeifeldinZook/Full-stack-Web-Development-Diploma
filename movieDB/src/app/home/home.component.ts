import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allTrending:any[];
  moviesTrending:any[];
  tvTrending:any[];
  peopleTrending:any[];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTrending('all',"3").subscribe((data)=>{

      data.results.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });

      this.allTrending = data.results.slice(0,10);
    });

    _MoviesService.getTrending('movies',"1").subscribe((data)=>{
      data.results.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });

      this.moviesTrending = data.results.slice(0,10);
    });

    _MoviesService.getTrending('tv',"2").subscribe((data)=>{
      data.results.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });

      this.tvTrending = data.results.slice(0,10);
    });

    _MoviesService.getTrending('person',"1").subscribe((data)=>{
      data.results.sort(function (a, b) {
        return b.popularity - a.popularity;
      });

      this.peopleTrending = data.results.slice(0,10);
    });
  };

  ngOnInit(): void {
  };
};

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tvTrending:any[];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTrending('tv','1').subscribe((data)=>{
      data.results.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });

      this.tvTrending = data.results;
    });
  }

  ngOnInit(): void {
  }

}

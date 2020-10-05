import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopleTrending:any[];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTrending('person', '1').subscribe((data)=>{
      data.results.sort(function (a, b) {
        return b.popularity - a.popularity;
      });

      this.peopleTrending = data.results;
    });
  }

  ngOnInit(): void {
  }

}

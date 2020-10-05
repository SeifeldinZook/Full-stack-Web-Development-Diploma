import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  imgPrefixTV = 'https://image.tmdb.org/t/p/w500';
  shows:any[];

  constructor(_ApiServiceService:ApiServiceService) {
    _ApiServiceService.getTv().subscribe((data)=>{    //data is not a syntax
      this.shows = data.results
      console.log(data.results)
    })
  }

  ngOnInit(): void {
  }

}

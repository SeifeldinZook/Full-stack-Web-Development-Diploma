import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from '../api-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  imgPrefixProfile = 'https://image.tmdb.org/t/p/w500';
  people:any[];

  constructor(_ApiServiceService:ApiServiceService) {
    _ApiServiceService.getPeople().subscribe((data)=>{    //data is not a syntax
    this.people = data.results
  })
}

  ngOnInit(): void {
  }

}

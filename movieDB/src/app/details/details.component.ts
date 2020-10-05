import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MoviesService} from '../movies.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  type:any;
  id:any;
  itemDetails:any;
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) {
    this.type = _ActivatedRoute.snapshot.paramMap.get('type');
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    _MoviesService.getItemDetails(this.type, this.id).subscribe((data)=>{
      this.itemDetails = data
    })
  };

  homePage() {
    console.log(this.itemDetails.homepage)
    window.open(`${this.itemDetails.homepage}`)
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public _AuthenticationService: AuthenticationService, private _Router:Router) {}

  logout() {
    localStorage.clear()
    this._Router.navigate(['/signin'])
  }

  ngOnInit(): void {
  }

}

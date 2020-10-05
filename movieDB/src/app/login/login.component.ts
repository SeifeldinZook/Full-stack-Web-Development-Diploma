import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router'
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService:AuthService, private _Router:Router) {}
  loginForm:FormGroup;
  loginFlag:boolean = false;
  errorMesssage:string


  getLoginReport (anyformGroup) {
    if (anyformGroup.valid == true) {
      this._AuthService.login(anyformGroup.value).subscribe((data)=>{
        if (data.message == 'success') {
          this._AuthService.saveCurrentUser(data.user.first_name, data.user.last_name, data.user.email, data.token)
          this._Router.navigate(['/home'])
        } else {
          this.loginFlag = true;
          this.errorMesssage = data.message;
        }
      })
    }
  };

  ngOnInit(): void {
    this.loginForm = new FormGroup ({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required,])
    });
  };
}

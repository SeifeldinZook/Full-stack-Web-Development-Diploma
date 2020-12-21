import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
declare var $: any

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

  isStyleInvalid={'background-color':'#17a2b8','border-color':'#17a2b8'}
  isStyleValid={'background-color':'red','border-color':'gray'}
  isClicked=false
  ResponseMessage=""
  isUniuqeEmailMessage=""
  isUniuqeEmail=false
  isSuccess=false

  constructor(private _AuthenticationService:AuthenticationService, private _Router:Router) {
    this._Router.navigate(['/profile'])
  }

  signInFormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  signInSubmit() {
    this.isClicked = true
    if (this.signInFormGroup.valid) {
      this._AuthenticationService.signIn(this.signInFormGroup.value).subscribe((data)=>{
        console.log(data)
        if (data.message=='success') {
          this._Router.navigate(['/profile']);
          this.isClicked = false;
          this.isSuccess = true;
          this.isUniuqeEmail = false;
          this.ResponseMessage = data.message;
          this.signInFormGroup.reset()
          localStorage.setItem("NotesToken", data.token)
        } else {
          console.log(data);
          this.isUniuqeEmailMessage = data.message;
          this.isUniuqeEmail = true;
          this.isSuccess = false;
          this.isClicked=false
        }
      })
    }
  }

  ngOnInit() {
    $('#signIn').particleground()
  }

}

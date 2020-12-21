import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { observable } from 'rxjs';
import { Router } from '@angular/router';
declare var $: any

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  isStyleInvalid={'background-color':'#17a2b8','border-color':'#17a2b8'};
  isStyleValid={'background-color':'red','border-color':'gray'};
  isClicked=false;
  ResponseMessage="";
  isUniuqeEmailMessage="";
  isUniuqeEmail=false;
  isSuccess=false;
  token;

  constructor(private _AuthenticationService:AuthenticationService, private _Router:Router) {
    if(localStorage.getItem('NotesToken')) {
      this._Router.navigate(['/profile'])      
    } else {
      this._Router.navigate(['/signup'])
    }
  }

  signUpFormGroup = new FormGroup({
    first_name:new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)]),
    last_name:new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)]),
    age:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,10}$/)])
  })
  

  signUpSubmit() {
    this.isClicked = true;
    if (this.signUpFormGroup.valid) {
      this._AuthenticationService.signUp(this.signUpFormGroup.value).subscribe((data)=>{
        if (data.message=='success') {
          this._Router.navigate(['/signin']);
          this.isClicked = false;
          this.isSuccess = true;
          this.isUniuqeEmail = false;
          this.ResponseMessage = data.message;
          this.signUpFormGroup.reset();
          console.log(data)
        } else {
          this.isUniuqeEmailMessage = data.errors.email.message;
          this.isUniuqeEmail = true;
          this.isSuccess = false;
          this.isClicked=false
          console.log(data)
        }
      })
    }
  }

  ngOnInit() {
    $('#signUp').particleground()
  }

}

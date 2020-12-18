import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  constructor(private _AuthService:AuthService, private _Router:Router) { }

  registrationForm:FormGroup;
  registerFlag:boolean = false;

  getRegistrationReport (anyformGroup) {
    if (anyformGroup.valid == true) {
      this._AuthService.register(anyformGroup.value).subscribe((data)=>{
        if (data.message == 'success') {
          this._Router.navigate(['/login'])
        } else {
          this.registerFlag = true;
        }
      })
    }
  };

  ngOnInit(): void {
    this.registrationForm = new FormGroup ({
      'first_name': new FormControl(null, [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
      'last_name': new FormControl(null, [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
      // 'password': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]/)])
    });
  };
};

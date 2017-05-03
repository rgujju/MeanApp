import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpModule} from '@angular/http';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService, HttpModule]
})
export class RegisterComponent implements OnInit {
    private registrationForm : FormGroup;
    private _passwordNotMatched:boolean = false;
    private _newUser: User;
    private _registered: boolean = false;
    constructor(
        private _fb : FormBuilder,
        private _router: Router,
        private _userService: UserService,
        ){}

  ngOnInit() {
    this.registrationForm = this._fb.group({
            firstName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            lastName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            username: ['', [<any>Validators.required, <any>Validators.minLength(3),Validators.pattern('[A-Za-z0-9]*')]],
            email: ['', [<any>Validators.required,Validators.email]],
            password: ['', [<any>Validators.required, <any>Validators.minLength(8)]],
            confirmPassword: ['', [<any>Validators.required, <any>Validators.minLength(8)]]
        });
  }

  onSubmit(form,valid){
      if(valid){
        if(form.password == form.confirmPassword){
          this._passwordNotMatched=false;
          //this._router.navigate(['login']);
          // Check at the backend if such a user exists
          this._newUser = {
            username: form.username,
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            password: form.password
          }
          this._userService.register(this._newUser)
            .subscribe(res => {
              if(res.success){
                this._registered = true;
                this._router.navigate(['login']);
              }else{
                console.log("Error in registering the user");
                this._router.navigate(['register']);
              }
            });
          this._newUser = null;

        } else{
          this._passwordNotMatched = true;
          //console.log('Entered Password does not match');
        }    
      }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { Router } from '@angular/router';

import { UserService } from '../user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService,HttpModule]
})
export class LoginComponent implements OnInit {
  
  private loginForm : FormGroup;
  private _loginError: boolean = false;
    constructor(
        private _fb : FormBuilder,
        private _router: Router,
        private _userService: UserService
        ){}

    ngOnInit(){
        this.loginForm = this._fb.group({
            username: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            password : ['',<any>Validators.required],
            remember: false
        });

    }

    
    loginSubmit(form,valid){
        //console.log(valid);
        if(valid){
            //this._router.navigate(['albums']);
            this._userService.login(form)
              .subscribe(res => {
                //console.log(res);
                if(res.success){
                  this._userService.storeAuthToken(res.user,res.token);
                  this._router.navigate(['profile/'+res.user.username]);
                }else{
                 this._loginError = true;
                 this._router.navigate(['login']);
                }
              });
            //console.log(form);
        }
    }

}

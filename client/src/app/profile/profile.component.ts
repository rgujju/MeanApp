import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpModule} from '@angular/http';

import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService, HttpModule]
})
export class ProfileComponent implements OnInit {
  
  private user:User = null;

  constructor(
      private _router: Router,
      private _userService: UserService,    
  ) { }

  ngOnInit() {
    this._userService.getProfile()
      .subscribe(profile => {
        //console.log(profile);
        this.user = profile.user;
        this._userService.setUser(profile.user);
      },
      err =>{
        //console.error(err);
        this._router.navigate(['login']);
        return false;
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {HttpModule} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[UserService,HttpModule]
})
export class NavbarComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private _router : Router
    ) { }

  ngOnInit() {
  }

  logout(){
    this._userService.logout();
    this._router.navigate(['']);
    return false
  }
}

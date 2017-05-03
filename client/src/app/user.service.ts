import {Injectable} from '@angular/core';
import {Http ,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';
import { tokenNotExpired } from 'angular2-jwt';

import { User } from './user';

@Injectable()
export class UserService {
    private _url = environment.URL;
    
    private _loggedIn: Boolean = false;
    private _authToken: any;
    private _user: User;

    constructor(private _http: Http){
    }
    
    register(user){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this._http.post(this._url+"/users/register",user,{headers:headers})
              .map(res => res.json());
    }

    storeAuthToken(user,token){
      this._user = user;
      this._authToken = token;
      localStorage.setItem('id_token',token);
      localStorage.setItem('user',JSON.stringify(user)); //local storage can only store strings
  }

    getStoredUser(){
      this._user= JSON.parse(localStorage.getItem('user')); //local storage can only store strings
      return this._user;
  }

    loggedIn() {
      return tokenNotExpired('id_token');
    }

    login(user){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this._http.post(this._url+"/users/authenticate",user,{headers:headers})
              .map(res => res.json());
    }

    setUser(user){
      this._user = user;
    }

    logout(){
      this._authToken = null;
      this._user = null;
      this._loggedIn = false;
      localStorage.clear();
    }

    getProfile(){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      this.loadToken();
      headers.append('Authorization',this._authToken);
      return this._http.get(this._url+"/users/profile",{headers:headers})
              .map(res => res.json());
    }

    loadToken(){
      this._authToken = localStorage.getItem('id_token');
    }

    // getAlbums() {
    //     return this._http.get(this._url)
    //         .map(res => res.json());
    // }
    
    // getPhotos(id){
    //     return this._http.get(this._url + "/" + id + "/photos")
    //         .map(res => res.json());
    // }
}
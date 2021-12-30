import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { login } from '../models/login';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private httpClient:HttpClient,private router:Router) { }
  registerUsingAPI(user:User){
    
    return this.httpClient.post("http://127.0.0.1:7000/Register",user); 
  }

  
  loginUsingAPI(user:login){
   
    return this.httpClient.post("http://127.0.0.1:7000/Login",user); 
  }
  loggedIn(){
        
    
    return localStorage.getItem('jwt');

    
  }

  logoutUser(){
    localStorage.removeItem('jwt');
    this.router.navigate(['/login'])
  }
}

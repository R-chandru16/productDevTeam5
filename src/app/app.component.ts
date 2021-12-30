import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from './Services/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VisualizationApp';
  username:string=" ";
  name:string="";
  constructor(public l:UserserviceService,private router:Router ){
    if(localStorage.getItem("email")!=null){
       this.username="style"
       this.name=localStorage.getItem("email")!!
    }
    else{
      this.username="style1"
      this.name=""

    }
   }
   getitem(){
    return localStorage.getItem("email")
  }
  
 
  }
  


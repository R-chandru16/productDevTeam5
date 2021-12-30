import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '../models/login';
import { SendDataService } from '../Services/send-data.service';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  log:login;
  myForm:FormGroup;
 
  constructor(private userservice:UserserviceService,private router:Router) { 
    this.log=new login();
    
    this.myForm=new FormGroup({
      "email":new FormControl(null,[Validators.required]),
      "pass":new FormControl(null,[Validators.required]),
      
     
    });
  }
  public get email():any{
    return this.myForm.get("email");
  }

 
  public get pass():any{
    return this.myForm.get("pass");
  }
 
  ngOnInit(): void {
  }
  register(){
    console.log("From the register component")
    console.log(this.log);
    console.log("----------------------------");
    if(this.myForm.valid)
    {
      this.log.email=this.email.value;
      this.log.password=this.pass.value;
   
    this.userservice.loginUsingAPI(this.log).subscribe((data)=>{

        var user:login = data as login;
      console.log(user.email);
     console.log(data);
      localStorage.setItem("email",user.email);
      localStorage.setItem("jwt",user.token);
      if(user.password)
    
      this.router.navigate(["first-screen"])  

    
    if(data){    
      alert("success")    
  }    
 }, err => {  
   alert("invalid email or password")

 });    
}   
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { SendDataService } from '../Services/send-data.service';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  user:User
  
  myForm:FormGroup;
 
  constructor(private userservice:UserserviceService,private router:Router) { 
    this.user=new User();
    
    this.myForm=new FormGroup({
      "name":new FormControl(null,[Validators.required]),
      "email":new FormControl(null,[Validators.required]),
      "address":new FormControl(null,[Validators.required]),
      "phone":new FormControl(null,[Validators.required]),
      "pass":new FormControl(null,[Validators.required]),
     
    });
  }

  public get name():any{
    return this.myForm.get("name");
  }
  public get email():any{
    return this.myForm.get("email");
  }

 
  public get address():any{
    return this.myForm.get("address");
  }
  
  public get phone():any{
    return this.myForm.get("phone");
  }
  
  public get pass():any{
    return this.myForm.get("pass");
  }
 


//   register(){
//     this.userservice.registerUsingAPI(this.user).subscribe((data)=>{

//       console.log(data)
//     })
//  }
//  ngOnInit(): void {
//  }

// }


ngOnInit(): void {
}

register(){
  console.log("From the register component")
  console.log(this.user);
  console.log("----------------------------");
  if(this.myForm.valid)
  {

    this.user.name=this.name.value;
    this.user.email=this.email.value;
    this.user.password=this.pass.value;
    this.user.address=this.address.value;
    this.user.phone=this.phone.value;
    
  this.userservice.registerUsingAPI(this.user).subscribe((data)=>{
    var user:User = data as User;
  
  console.log(data)
    localStorage.setItem("email",user.email);
    this.router.navigate(["login"])  
  
    if(data){    
      alert("success")    
  }  
    
 }, err => {    

  alert("id already exist")
 });    
}   
  }
}

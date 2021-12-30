import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  registerUsingAPI(user: User) {
    throw new Error('Method not implemented.');
  }

token:string;

  constructor(private httpclient:HttpClient) {
this.token=localStorage.getItem("jwt")!!
   }

   
   SendFile(file:FormData) {
    var header=new HttpHeaders({
   
      'x-access-token': localStorage.getItem("jwt")!!.toString()
    })
       return this.httpclient.post("http://127.0.0.1:7000/",file,{headers:header})
   }
   getBar():Observable<any>{
    var header=new HttpHeaders({
      'x-access-token': localStorage.getItem("jwt")!!.toString()
    })
     return this.httpclient.get(`http://127.0.0.1:7000/getBar?time=${Date.now()}`,{headers:header, responseType: 'blob'})
   }
   getPie():Observable<any>{
    var header=new HttpHeaders({ 
      'x-access-token': localStorage.getItem("jwt")!!.toString()
    })
    return this.httpclient.get(`http://127.0.0.1:7000/getPie?time=${Date.now()}`,{headers:header,responseType: 'blob'})
  }
  getHist():Observable<any>{
    var header=new HttpHeaders({
      'x-access-token': localStorage.getItem("jwt")!!.toString()
    })
    return this.httpclient.get(`http://127.0.0.1:7000/getHist?time=${Date.now()}`,{headers:header,responseType: 'blob'})
  }
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { data } from '../models/data';
import { SendDataService } from '../Services/send-data.service';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent implements OnInit {
mygroup:FormGroup
arr:String[]=["pdf","csv","txt"]
style:string
name:String=""
ss:String="s"
imageToShow: any;
names:String="";
branch:String="";
address:String="";
isImageLoading=false
//image = '';
//image$:Promise<any>;
imgLoad:any

data1:FormData=new FormData()
  constructor(private service:SendDataService) { 
    this.mygroup=new FormGroup({
      "file":new FormControl(null)
    })
    this.style="style1"
    //this.image$=this.loadImage(this.image)
    
  }

  
  handleFileInput(files: Event) {
    var file=files.target as HTMLInputElement
    var filetoupload:File = (file.files as FileList)[0];
    this.name=filetoupload.name
    if(this.data1.has('file')){
      this.data1.set("file",filetoupload)
    }
    else
      this.data1.append('file',filetoupload)
}
update(){
  this.imageToShow=""
  this.ss="s"
  this.style="style1"
}
  public get file():any{
    return this.mygroup.get("file")
  }
  onSubmit(){
    var c=0
    this.isImageLoading=true
    //var name=this.data1.get("file")!!.toString.name
    if(this.name!=null){
      var ext=this.name.slice(this.name!!.length-3,this.name!!.length).toLowerCase()
      for(var i=0; i<this.arr.length;i++){
        if(this.arr[i]==ext){
          c=1
          break
        }
      }
      if(c==1){
        alert("File Submitted successfully-Please wait while the data get Visualized");
  
        this.service.SendFile(this.data1).subscribe((data)=>{
        var success:data=data as data
        alert("Data Visualization is Successfull")
        this.names=success.name!!
        this.branch=success.Branch!!
        this.address=success.address!!
        this.ss="s1"
        
        console.log(data)
      },error => {
       
        alert("Some error occured please choose a valid file");
     })
    }
    else{
      alert("Please upload csv pdf or txt files only")
    } 
   
  }
  else{
    alert("Please upload a file")
  }
    console.log(this.name.toLowerCase())
  }
  getBar():void{
   this.service.getBar().subscribe((data:Blob)=>{
    this.isImageLoading=true
    this.createImageFromBlob(data);
    this.isImageLoading=false
    console.log(data)
   })
  }

  getPie(){
    this.service.getPie().subscribe((data:Blob)=>{
      this.isImageLoading=true
      this.createImageFromBlob(data);
      this.isImageLoading=false
      console.log(data)
     })
  }
  getHist(){
    this.service.getHist().subscribe((data:Blob)=>{
      this.isImageLoading=true
      this.createImageFromBlob(data);
      this.isImageLoading=false
     })
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
       this.style="style"
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }
 
 
  ngOnInit(): void {
  }

}
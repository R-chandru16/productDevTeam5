import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { SendDataService } from './Services/send-data.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule } from '@angular/router';
import { UserserviceService } from './Services/userservice.service';

var myRoutes:Route[]=[
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'first-screen',component:FirstScreenComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    FirstScreenComponent,
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
   
  ],
  providers: [SendDataService,UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

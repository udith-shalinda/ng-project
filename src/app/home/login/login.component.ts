import { Component, OnInit } from '@angular/core';
 import {FormGroup, FormControl} from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  server:Server;

  UserData={firstName:'fname',lastName:'lname'}

  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      'firstName':new FormControl(null),
      'lastName' : new FormControl(null)
    });
  }
  submited(){
    this.UserData.firstName=this.loginForm.value.firstName;
    this.UserData.lastName=this.loginForm.value.lastName;
    this.loginService.storeServer(this.UserData).subscribe(
      (response)=>console.log(response)
    );
  }

  getData(){
    this.loginService.getServer().subscribe(
      d=>{
        //this.server = response
        console.log(d)
       // this.UserData = d;
      }
        
    );
  }

}

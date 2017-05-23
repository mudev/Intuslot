import { Component } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
 })
 
export class LoginComponent { 
  email: string;
  password: string;
  
  constructor(private userServ: UserService, private router: Router){}

  login(){
    this.userServ.login(this.email, this.password);
    this.userServ.verifyUser();
  }

  cancel(){
    this.router.navigate(['']);
  }
}
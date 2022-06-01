import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // login = 'Sign In';
  loginForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
  //      this.submitted = true;
  //      if(this.loginForm.valid)
  //      {
  //         localStorage.setItem("userName",this.loginForm.get('userName')?.value);
  //         localStorage.setItem("passWord",this.loginForm.get('passWord')?.value);  
  //         this.clear();
  //         this.loginForm.disable();
  //         this.router.navigate(['registration']);
  //      }
  // }
  }
}

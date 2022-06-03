import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // username = new FormControl('');
  // password = new FormControl('');
  // login = 'Sign In';
  // loginForm!:FormGroup;

  // constructor() { }

  // ngOnInit(): void {
  // }

  // onSubmit()
  // {
  // //      this.submitted = true;
  // //      if(this.loginForm.valid)
  // //      {
  // //         localStorage.setItem("userName",this.loginForm.get('userName')?.value);
  // //         localStorage.setItem("passWord",this.loginForm.get('passWord')?.value);  
  // //         this.clear();
  // //         this.loginForm.disable();
  // //         this.router.navigate(['registration']);
  // //      }
  // // }
  // }

  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: [''],
      password: ['', Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsersList")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password 
      });
      if(user){
        alert('Login Succesful');
        this.loginForm.reset()
      this.router.navigate(["dashboard"])
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  }



}

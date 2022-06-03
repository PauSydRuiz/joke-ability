import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { JokeService } from '../joke.service';
import { isNgTemplate } from '@angular/compiler';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any = FormGroup;
  users:any = [];
  // username = new FormControl('');
  // password = new FormControl('');
  // login = 'Sign In';
  alert: boolean=false
 

  
  get f() {
    return this.loginForm.controls;
  }
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

  // public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private router: Router, private userto: JokeService) { }

  ngOnInit(): void {
    
    this.loginForm = this.formbuilder.group({
      username: new FormControl ('',Validators.required),
      password: new FormControl ('', Validators.required),
    });

    this.userto.getUser().subscribe((response: any) => {
       console.log('database',response);
       this.users = response;
    });

  }


  loginSubmit(data:any){
    // this.http.get<any>("http://localhost:3000/signupUsersList")
    // .subscribe(res=>{
    //   const user = res.find((a:any)=>{
    //     return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password 
    //   });
    // //   if(user){
    // //     alert('Login Succesful');
    // //     this.loginForm.reset()
    // //   this.router.navigate(["dashboard"])
    // //   }else{
    // //     alert("user not found")
    // //   }
    // // },err=>{
    // //   alert("Something went wrong")
    // })

    //console.log('result',this.loginForm.value)
    // if (data.username){

    //   this.users.array.foreach((item:any) => {
    //     if(item.username === data.username && item.password === data.password){
        
    //         console.log("Account is Valid");
    //     }
    //     else{
    //       console.log("Account is invalid");
    //     }
    //   });
    // }

    
    for(let i=0 ; i< this.users.length; i++)
    {
      if (this.users[i].username === data.username && this.users[i].password === data.password)
        {
          // console.log("User is Valid" , this.users[i]);
          localStorage.setItem("isLoggedIn", "true");
          this.router.navigate(['/dashboard']);
        }
        else 
        {
          // console.log("User is Invalid");
          //localStorage.clear();
          this.alert=true;
        }
     
    }    
  }
}


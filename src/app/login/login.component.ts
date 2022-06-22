import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpStatusCode, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { JokeService } from '../joke.service';
import { isNgTemplate } from '@angular/compiler';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any = FormGroup;
  
  id:any=[];
  
 
  // username = new FormControl('');
  // password = new FormControl('');
  // login = 'Sign In';
  alert: boolean=false
  errorMessage!:string | undefined;
 
  
  get f() {
    return this.loginForm.controls;
  }
  // constructor() { }

  // ngOnInit(): void {
  // }

  // onSubmit()
  // {
  //     //  this.submitted = true;
  //      if(this.loginForm.valid)
  //      {
  //         localStorage.setItem("userName",this.loginForm.get('userName')?.value);
  //         localStorage.setItem("passWord",this.loginForm.get('passWord')?.value);  
  //         // this.clear();
  //         // this.loginForm.disable();
  //         // this.router.navigate(['registration']);
  //      }
  // }
  // }

  // public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private router: Router, private userto: JokeService) { }

  ngOnInit(): void {
    
    this.loginForm = this.formbuilder.group({
      username: new FormControl ('',Validators.required),
      password: new FormControl ('', Validators.required),
    });

    // this.userto.getUser(this.loginForm).subscribe((response: any) => {
    //    console.log('result',response);
    // }
    // );
    

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

    
    // for(let i=0 ; i< this.users.length; i++)
    // {
    //   if (this.users[i].username === data.username && this.users[i].password === data.password)
    //     {
    //       // console.log("User is Valid" , this.users[i]);5
    //       localStorage.setItem("isLoggedIn", "true");
    //       localStorage.setItem("username", this.users[i].username);
    //       localStorage.setItem("id", this.users[i].id);
    //       this.router.navigate(['/dashboard']);
    //       console.log('username',this.users[i].username)
          
          
    //     }
    //     else 
    //     {
    //       // console.log("User is Invalid");
    //       // localStorage.clear();
    //       this.alert=true;
          
    //     }
      // const jsonData = JSON.stringify(data)
     
      
      this.userto.getUser(this.loginForm.value).subscribe(response =>{
        console.log('result',response);
        localStorage.setItem("username",this.loginForm.get('username')?.value);
        localStorage.setItem("token", JSON.stringify(response));
        this.router.navigate(['/dashboard']);
        
        
      },  error => {
        // console.log(error);
        this.errorMessage = error;
      }
      )
      
      // this.userto.getUser(this.loginForm).subscribe((response: any) => {
    //    console.log('result',response);
    // }

      // if(this.loginForm.valid){
      //   this.userto.getUser(this.loginForm.value).subscribe(result =>{
      //     if (result.){

      //     }
      //   })
      // }
     

    }    
  }
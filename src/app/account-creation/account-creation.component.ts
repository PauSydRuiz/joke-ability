import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { JokeService } from '../joke.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.scss'],
})
export class AccountCreationComponent implements OnInit {

  alert: boolean=false
  id:any
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
  });

  get f() {
    return this.signupForm.controls;
  }

  submit() {
    // console.log(this.signupForm.value);
   console.log("Input required fields")
    
  }

  constructor(private userto: JokeService) {}

  ngOnInit(): void {
    this.signupForm.controls['confirmpassword'].valueChanges.subscribe(
      (value) => {
        const { password } = this.signupForm.value;
        if (password != value) {
          this.signupForm.controls['confirmpassword'].setErrors({
            mismatch: true,
          });
        }

        console.log(this.signupForm.controls['confirmpassword']);
      }
    );
  }

  
  

  signUp(data: any) {

    //console.warn(this.addUser.value)
    // this.userto.saveUser(this.addUser.value).subscribe((result: any)=>{
    //   console.warn("result is here",result)

    // }
    // );
    // console.log(this.signupForm.value, '<======== signup form value');
    let signupForm ={
      email: data.email,
      username: data.username,
      password: data.password,
      id: data.id++
    }

    this.userto.saveUser(signupForm).subscribe((data: any)=>{
      console.log(data);
      this.signupForm.reset({})
    })

    // this.userto.saveUser(this.signupForm.value).subscribe((result: any) => {
    //   // console.log('result is here', result);
    //   console.log(
    //     'Result',
    //     this.signupForm.value,
    //     '<======== signup form value'
    //   );
        
    // });
    
  

    // get all post
  //   this.userto.getPost().subscribe((response: any) => {
  //     console.log(response);
  //   });
  //   this.alert=true,
  //   this.signupForm.reset({})
  // }
  // closeAlert()
  // {
  //   this.alert=false
  }
}

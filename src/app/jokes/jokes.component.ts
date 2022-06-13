import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { JokeService } from '../joke.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
  
  

})
export class JokesComponent implements OnInit {

  
  alert: boolean=false
  // todayDate = new Date();
  id:any
  liked:any  
  postJoke = new FormGroup({
    author: new FormControl(''),
    joke: new FormControl('', Validators.required),
    // date: new FormControl(),
  });
  username: any=[];
  userid:any=[];
  // routes= [
  //   { linkname: 'Jokes', url: 'jokes'}
  // ]
  
 
  get f() {
    return this.postJoke.controls;
  }

  constructor(private userto: JokeService) { 
    
  }

  ngOnInit(): void {
    this.getUsername();
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }



  addJoke(data: any){
    let postJoke = {
      author: this.username,
      userid: this.userid,
      joke: data.joke,
      isLiked: data.isLiked=false,
      liked:data.liked=0,
      id: data.id++

    }
    this.userto.saveJoke(postJoke).subscribe((data: any)=>{
      console.log(data);
      // console.log('Date',this.todayDate
      this.postJoke.reset({})
      this.alert=true;
    })
  }

  getUsername(){
    //return localStorage.getItem('username')
    this.username=localStorage.getItem('username');
    this.id=localStorage.getItem('id')
  }

}

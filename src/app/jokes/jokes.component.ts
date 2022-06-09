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
  postJoke = new FormGroup({
    author: new FormControl('', Validators.required),
    detail: new FormControl('', Validators.required),
    // date: new FormControl(),
  });

  // routes= [
  //   { linkname: 'Jokes', url: 'jokes'}
  // ]
 
  get f() {
    return this.postJoke.controls;
  }

  constructor(private userto: JokeService) { 
    
  }

  ngOnInit(): void {
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
      author: data.author,
      // date: data.date,
      detail: data.joke,
      id: data.id++
    }
    this.userto.saveJoke(postJoke).subscribe((data: any)=>{
      console.log(data);
      // console.log('Date',this.todayDate)
      this.alert=true
      this.postJoke.reset({})
      
    })
  }

}

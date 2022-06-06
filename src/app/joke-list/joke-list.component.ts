import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';


@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  jokeList: any=[];

  constructor(private jokesView: JokeService) { }

  ngOnInit(): void {
    this.jokesView.getJokes().subscribe((data:any)=>{
      this.jokeList = data;
    })

  }

}

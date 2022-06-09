
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  author: any = [];
  
  constructor(private route: ActivatedRoute, private jokeService: JokeService) {}
  
  ngOnInit(): void {
    this.getAuthor();
  }
  
  getAuthor():void {
    const id = 
    Number(this.route.snapshot.paramMap.get('id'));
      this.jokeService.getUser()
     
  }
}
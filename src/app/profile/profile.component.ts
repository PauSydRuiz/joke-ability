import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  author: any = [];
  id: any = [];

  constructor(
    private route: ActivatedRoute,
    private jokeService: JokeService
  ) {}

  ngOnInit(): void {
    this.getAuthor();
//     joke_list.forEach(element => {
//       if(id = element.id){
//         this.user_profile = element
//       }
//  });
    // let id= this.route.snapshot.paramMap.get('id');
    // console.log(id);
  }

  getAuthor(): void {
    console.log(this.route);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jokeService.getUser();
    console.log('ID:', id);

    this;
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  author: any = [];
  id: any = [];
  userList: any=[];
  // username!:string;
  username: any=[];

  constructor(
    private route: ActivatedRoute,
    private jokeService: JokeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAuthor();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //     joke_list.forEach(element => {
    //       if(id = element.id){
    //         this.user_profile = element
    //       }
    //  });
    // let id= this.route.snapshot.paramMap.get('id');
    // console.log(id);
  }

  getAuthor(): void {
    const author = this.route.snapshot.paramMap.get('author');
    console.log(author)
    this.jokeService.getUser().subscribe((res: any) => {
      res.forEach((e: any) => {
        if (author == e.username) {
          this.userList=e;
          console.log(e);
          
          
        }

      });
    });

    // this;
  }

  
}

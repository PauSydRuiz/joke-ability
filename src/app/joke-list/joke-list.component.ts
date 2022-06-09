import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  jokeList: any=[];

  constructor(private jokesView: JokeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchPosts();
    

  }
  fetchPosts(): void {
    this.jokesView.getJokes().subscribe((data:any)=>{
    this.jokeList = data;
  },
    (error) => {
      console.log(error);
  })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  // getAuthor():void {
  //   const id = 
  //   Number(this.route.snapshot.paramMap.get('id'));
  //     this.jokesView.getUser()
     
  // }
}
